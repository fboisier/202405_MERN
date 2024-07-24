import { Router } from 'express';
import { getParametros, getParametro, crearParametro, actualizarParametro, eliminarParametro } from '../controllers/parametros.controller.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/parametros
router.get("/", getParametros);
router.post("/", crearParametro)
router.get("/:llave", getParametro)
router.put("/:llave", actualizarParametro)
router.delete("/:llave", eliminarParametro)

export default router
