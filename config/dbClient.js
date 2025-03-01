import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // ✅ Cargar variables de entorno desde .env

class DBClient {
   async connectDB() {
        const queryString = process.env.DB_STRING;
        if (!queryString) {
            throw new Error("❌ ERROR: No se encontró la variable DB_STRING en el .env");
        }
        try {
            await mongoose.connect(queryString);
            console.log("✅ Conectado a MongoDB correctamente");
        } catch (error) {
            console.error("❌ Error al conectar a MongoDB:", error);
            process.exit(1); // 🔴 Detener la aplicación si falla la conexión
        }
    }

    getDatabase() {
        if (!this.db) {
            throw new Error("❌ ERROR: La base de datos no está conectada. Llama a connectDB() primero.");
        }
        return this.db;
    }

}

export default new DBClient();
