import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import mascotas from "../schemas/mascotas.js";

class MascotasModelo {
    async create(data) {
        try {
            return mascotas.create(data);
        } catch (error) {
            console.error("❌ Error al insertar mascota:", error);
            throw error;
        }
    }

    async  getAll() {
        return await mascotas.find();
    }

    async update(id, data) {
        return await mascotas.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data }, { new: true });
    }

    async delete(id) { 
        return await mascotas.findOneAndDelete({ _id: new ObjectId(id) });
    }

    async  getOne(id) {
        return await mascotas.findOne({ _id: new ObjectId(id) });
    }
}

export default new MascotasModelo();
