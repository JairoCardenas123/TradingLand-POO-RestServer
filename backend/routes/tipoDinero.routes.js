import express from "express"
import { obtenerDinero } from "../controllers/tipoDinero.controllers.js"

const router = express.Router()

router.get("/",obtenerDinero)

export default router
