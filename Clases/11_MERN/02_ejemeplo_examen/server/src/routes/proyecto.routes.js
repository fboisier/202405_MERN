import { Router } from 'express';
import { getProyectos, crearProyecto, actualizarProyecto, eliminarProyecto } from '../controllers/proyecto.controller.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/proyectos
router.get("/", getProyectos);
router.post("/", crearProyecto);
router.put("/:id", actualizarProyecto);
router.delete("/:id", eliminarProyecto);

export default router
