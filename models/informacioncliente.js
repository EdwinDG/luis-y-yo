import mongoose from "mongoose";

const InformacionCliente = new mongoose.Schema({
    cc_cliente: { type: String, required: true },
    nombre_cliente: { type: String, required: true },
    telefono_cliente: { type: String, required: true },
})