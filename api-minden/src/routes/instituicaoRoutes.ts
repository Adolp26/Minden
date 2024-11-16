// src/routes/instituicaoRoutes.ts
import express from 'express';
import InstituicaoController from '../controllers/instituicaoController';
import {authMiddleware} from '../middlewares/authMiddleware';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas
// router.use(authMiddleware);

// Rotas CRUD
router.post('/instituicao', InstituicaoController.create);
router.get('/instituicao', InstituicaoController.getAll);
router.get('/instituicao/:id', InstituicaoController.getById);
router.put('/instituicao/:id', InstituicaoController.update);
router.delete('/instituicao/:id', InstituicaoController.delete);

export default router;