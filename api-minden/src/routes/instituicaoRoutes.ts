// src/routes/instituicaoRoutes.ts
import express from 'express';
import InstituicaoController from '../controllers/instituicaoController';
import {authMiddleware} from '../middlewares/authMiddleware';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas
// router.use(authMiddleware);

// Rotas CRUD
router.post('/', InstituicaoController.create);
router.get('/', InstituicaoController.getAll);
router.get('/:id', InstituicaoController.getById);
router.put('/:id', InstituicaoController.update);
router.delete('/:id', InstituicaoController.delete);

export default router;