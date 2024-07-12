import { Router } from 'express';
import { getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios.controller.js';
import { validarIdUsuario } from '../middlewares/validar_algo.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/usuarios
router.get("/", getUsuarios);
router.post("/" ,validarIdUsuario, crearUsuario)
router.get("/:id", getUsuario)
router.put("/:id",validarIdUsuario, actualizarUsuario)
router.delete("/:id", eliminarUsuario)

export default router