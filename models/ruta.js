import mongoose from "mongoose";


const Ruta = new mongoose.Schema({
    sucursal: { type: String, required: true },
    origen: { type: String, required: true },
    destino: { type: String, required: true },
    fecha_salida: { type: Date, required: true },
})

