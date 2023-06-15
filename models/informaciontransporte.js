import mongoose from "mongoose";

const InformacionTransporte = new mongoose.Schema({
    vehiculo: { type: String, required: true },
    numasientos: { type: Number, required: true },
    horario: { type: String, required: true }
})