import { Router } from 'express';
import { iniciarSesion, registrar } from '../controllers/user.controller.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/auth
router.post("/login", iniciarSesion);
router.post("/register", registrar);

export default router
