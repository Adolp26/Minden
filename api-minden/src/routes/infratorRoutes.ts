// src/routes/infratorRoutes.ts
import express from 'express';
import InfratorController from '../controllers/infratorController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas
// router.use(authMiddleware);

// Rotas CRUD
router.post('/', InfratorController.create);
router.get('/', InfratorController.getAll);
router.get('/:id', InfratorController.getById);
router.put('/:id', InfratorController.update);
router.delete('/:id', InfratorController.delete);

export default router;