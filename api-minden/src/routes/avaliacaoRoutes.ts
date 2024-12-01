import express from 'express';
import AvaliacaoController from '../controllers/avaliacaoController';

const router = express.Router();

// Rota para criar avaliação
router.post('/', AvaliacaoController.create);

// Rota para obter todas as avaliações
router.get('/', AvaliacaoController.getAll);

// Rota para obter avaliação por ID
router.get('/:id', AvaliacaoController.getById);

// Rota para atualizar avaliação
router.put('/:id', AvaliacaoController.update);

// Rota para deletar avaliação
router.delete('/:id', AvaliacaoController.delete);

export default router;
