import express from "express";
import dotenv from "dotenv";
import dbClient from "./config/dbClient.js"; 
import routesMascotas from "./routes/mascotas.js";
import routesUsuarios from "./routes/usuarios.js";
import DBClient from "./config/dbClient.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use('/mascotas', routesMascotas);
app.use('/usuarios', routesUsuarios);


(async () => {
    try {
        await DBClient.connectDB(); // ✅ Conectar la BD antes de levantar el servidor
        app.use("/mascotas", routesMascotas);
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
    } catch (error) {
        console.error("❌ No se pudo iniciar el servidor:", error);
        process.exit(1);
    }
})();

process.on("SIGINT", async () => {
    await dbClient.closeConnection();
    console.log("👋🏼 Conexión a la base de datos cerrada.");
    process.exit(0);
});

