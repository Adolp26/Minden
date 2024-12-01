import express from 'express';
import { AcompanhamentoController } from '../controllers/acompanhamentoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Aplica o middleware de autenticação em todas as rotas
// router.use(authMiddleware);

// Rotas CRUD básicas
router.post('/', AcompanhamentoController.create);
router.get('/', AcompanhamentoController.getAll);
router.get('/:id', AcompanhamentoController.getById);
router.put('/:id', AcompanhamentoController.update);
router.delete('/:id', AcompanhamentoController.delete);

// Rotas adicionais específicas
router.get('/infrator/:infratorId', AcompanhamentoController.getByInfratorId);
router.get('/atividade/:atividadeId', AcompanhamentoController.getByAtividadeId);
router.get('/data/:data', AcompanhamentoController.getByDataParticipacao);

export default router;
