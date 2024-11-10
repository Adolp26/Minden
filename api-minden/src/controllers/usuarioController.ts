import { Request, Response } from 'express';
import UsuarioService from '../services/usuarioService';

class UserController {
  // Método para registrar um usuário
  async register(req: Request, res: Response) {
    try {
      const user = await UsuarioService.register(req.body);
      return res.status(201).json({ message: 'Usuário cadastrado com sucesso.', user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  // Método para fazer login
  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const { token, user } = await UsuarioService.login(email, senha);
      return res.status(200).json({ message: 'Login bem-sucedido.', token, user });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  // Método para buscar usuário por ID
  async getUserById(req: Request, res: Response) {
    try {
      const user = await UsuarioService.getUserById(Number(req.params.id));
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  // Método para atualizar informações do usuário
  async updateUser(req: Request, res: Response) {
    try {
      const user = await UsuarioService.updateUser(Number(req.params.id), req.body);
      return res.status(200).json({ message: 'Usuário atualizado com sucesso.', user });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default new UserController();
