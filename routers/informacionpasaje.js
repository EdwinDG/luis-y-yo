import { Router } from "express"
import httpinformacionPasaje from "../controllers/InformacionPasaje.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check("Nmro_ticket","El campo Nmro_ticket es obligatorio").not().isEmpty,
    check("tipo_venta","El campo tipo_venta es obligatorio").not().isEmpty,
    check("fecha_venta","El campo fecha_venta es obligatorio").not().isEmpty,
    check("Num_pasajes","El campo Num_pasajes es obligatorio").not().isEmpty,
    check("Total_pasajes","El campo Total_pasajes es obligatorio").not().isEmpty,
    // check("informacioncliente","El campo informacioncliente es obligatorio").not().isEmpty,
    // check("ruta","El campo ruta es obligatorio").not().isEmpty,
    // check("valor","El campo valor es obligatorio").not().isEmpty,
    // check("vendedor","El campo vendedor es obligatorio").not().isEmpty,
    // check("asiento","El campo asiento es obligatorio").not().isEmpty,
  ],httpinformacionPasaje.getinformacionPasaje)

export default router