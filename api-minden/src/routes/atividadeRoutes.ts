
import express from 'express';
import { AtividadeController } from '../controllers/atividadeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas
// router.use(authMiddleware);

// Rotas CRUD básicas
router.post('/', AtividadeController.create);
router.get('/', AtividadeController.getAll);
router.get('/:id', AtividadeController.getById);
router.put('/:id', AtividadeController.update);
router.delete('/:id', AtividadeController.delete);

// Rotas adicionais específicas
router.get('/status/:status', AtividadeController.getByStatus);
router.get('/responsavel/:responsavelId', AtividadeController.getByResponsavel);

export default router;