import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    min : [0 ,'La edad no parece correcta'],
    max : [30 ,'La edad no parece correcta' ]
  },
  tipo: {
    type: String,
    required: true,
    enum : ['Perro', 'Gato', 'Conejo','perro', 'gato', 'conejo'],
  },
  adoptado: {
    type: Boolean,
    default: false,
  },
  descripcion: {
    type: String,
    required: true,
  },
}, {timestamps: true});

export default mongoose.model('mascotas', mascotaSchema);
