import { Router } from "express"
import httpinformacionruta from "../controllers/informacionruta.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check ("sucursal","El nombre de la sucursal debe ser especificada").not().isEmpty(),
    check("origen","El lugar de salida debe estar especificado").not().isEmpty(),
    check("destino","El lugar de destino debe estar especificado").not().isEmpty(),
    check("fecha_salida","La fecha de salida debe estar especificada").not().isEmpty()
],httpinformacionruta.getinformacionruta)

export default router