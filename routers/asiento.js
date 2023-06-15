import { Router } from "express"
import httpasiento from "../controllers/asiento.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check("codigo_asiento","Numero de asiento es obligatorio").not().isEmpty(),
    check("asientos_comprados","Numero de asientos comprados").not().isEmpty(),
  ],httpasiento.getasiento)

export default router