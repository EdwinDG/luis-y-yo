import { Router } from "express"
import httpinformacionvendedor from "../controllers/informacionvendedor.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check ("nombre","el nombre es obligatorio").not().isEmpty(),
],httpinformacionvendedor.getinformacionvendedor)

export default router