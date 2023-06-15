import { Router } from "express"
import httpinformacioncleinte from "../controllers/informacioncliente.js"
import { check } from "express-validator"


const router = new Router()

router.get('/hola', [
    check("cc_cliente","La cedula es obligatoria").not().isEmpty(),
    check("nombre_cliente","El nombre es obligatorio").not().isEmpty(),
    check("telefono_cliente","el numero del telefono es obligatorio").not().isEmpty()
    
  ],httpinformacioncleinte.getinformacioncliente)

export default router