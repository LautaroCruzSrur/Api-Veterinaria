import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

export function generarToken(email) {
    return jsonwebtoken.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
}

export function verificarToken(req, res, next) {
    const token = req.headers["authorization"]?.replace("Bearer ", "");
    
    if (!token) {
        return res.status(401).json({ message: "Token requerido" }); // 🔹 Mensaje corregido
    }

    try {
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.user = dataToken; 
        req.emailConectado = dataToken.email;// 🔹 Guardamos la info del usuario en req para usarla después
        next(); // ✅ Solo pasamos al siguiente middleware, sin enviar respuesta aquí
    } catch (error) {
        return res.status(401).json({ message: "No autorizado" }); // 🔹 Mensaje de error consistente
    }
}

