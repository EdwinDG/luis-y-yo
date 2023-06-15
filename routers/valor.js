import { Router } from "express"
import httpinformacionvalor from "../controllers/informacionvalor.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check ("precio","El precio del pasaje debe estar especificado").not().isEmpty(),

],httpinformacionvalor.getinformacionvalor)

export default router