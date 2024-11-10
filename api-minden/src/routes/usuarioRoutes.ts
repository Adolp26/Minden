import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import usuarioController from '../controllers/usuarioController';

const router = Router();

// Rotas de usuário
router.post('/usuarios/register', usuarioController.register);
router.post('/usuarios/login', usuarioController.login);
router.get('/usuarios/:id', authMiddleware(['admin', 'user']), usuarioController.getUserById);
router.put('/usuarios/:id', authMiddleware(['admin', 'user']), usuarioController.updateUser);

export default router;
