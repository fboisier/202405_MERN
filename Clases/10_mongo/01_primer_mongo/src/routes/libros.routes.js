import { Router } from 'express';
import { crearLibro, obtenerTodosLosLibros, obtenerLibroPorId, actualizarLibro, eliminarLibro } from '../controllers/libros.controller.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/libros
router.get("/", obtenerTodosLosLibros);
router.post("/" , crearLibro)
router.get("/:id", obtenerLibroPorId)
router.put("/:id", actualizarLibro)
router.delete("/:id", eliminarLibro)

export default router