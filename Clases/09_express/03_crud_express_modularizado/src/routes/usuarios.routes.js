import { Router } from 'express';
import { getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios.controller.js';
import { validarIdUsuario } from '../middlewares/validar_algo.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/usuarios

/**
 * @swagger
 * tags:
 *   - name: Usuarios
 *     description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /api/v1/usuarios:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios devuelta correctamente
 * 
 */
router.get("/", getUsuarios);
router.post("/" ,validarIdUsuario, crearUsuario)
router.get("/:id", getUsuario)
router.put("/:id",validarIdUsuario, actualizarUsuario)
router.delete("/:id", eliminarUsuario)

export default router