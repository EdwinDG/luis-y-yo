import { Router } from "express"
import httpinformaciontransporte from "../controllers/informaciontransporte.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check ("vehiculo","Las placas del vehiculo deben ser obligatorias").not().isEmpty(),
    check("numasientos","").not().isEmpty(),
    check("horario","La hora de salida debe estar especificada").not().isEmpty()
],httpinformaciontransporte.getinformaciontransporte)

export default router