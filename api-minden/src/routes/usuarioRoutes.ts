import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import usuarioController from '../controllers/usuarioController';

const router = Router();

// Rotas de usuário
router.post('/register', usuarioController.register);
router.post('/login', usuarioController.login);
router.get('/:id', authMiddleware, usuarioController.getUserById);
router.put('/:id', authMiddleware, usuarioController.updateUser);

export default router;
