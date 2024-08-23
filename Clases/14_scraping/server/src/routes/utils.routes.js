import { Router } from 'express';
import { getPageGithub } from '../controllers/utils.controller.js';

const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE 
///api/v1/utils
router.get("/scraping", getPageGithub);

export default router
