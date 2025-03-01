import mongoose from "mongoose";
import usuarios from "../schemas/usuarios.js";
import { ObjectId } from "mongodb";

class usuarioModel{
    async create(data) {
        try {
            return usuarios.create(data);
        } catch (error) {
            console.error("❌ Error al insertar usuario:", error);
            throw error;
        }
    }

    async  getAll() {
        return await usuarios.find();
    }

    async update(id, data) {
        return await usuarios.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data }, { new: true });
    }

    async delete(id) { 
        return await usuarios.findOneAndDelete({ _id: new ObjectId(id) });
    }

    async  getOne(filtro) {
        return await usuarios.findOne(filtro);
    }
}

export default new usuarioModel();