import e from "express";
import mongoose from "mongoose";



const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim : true,
    },
    telefono: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    }, {timestamps: true});


    export default mongoose.model('usuarios', usuarioSchema);