import { Request, Response } from 'express';
import UsuarioService from '../services/usuarioService';

class UserController {
  // Método para registrar um usuário
  async register(req: Request, res: Response) {
    try {
      const user = await UsuarioService.register(req.body);
      return res.status(201).json({ message: 'Usuário cadastrado com sucesso.', user });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      return res.status(400).json({ error: 'Erro ao registrar usuário. Verifique os dados e tente novamente.' });
    }
  }

  // Método para fazer login
  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const { token, user } = await UsuarioService.login(email, senha);
      return res.status(200).json({ message: 'Login bem-sucedido.', token, user });
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      return res.status(401).json({ error: 'Não foi possível realizar o login. Verifique suas credenciais.' });
    }
  }

  // Método para buscar usuário por ID
  async getUserById(req: Request, res: Response) {
    try {
      const user = await UsuarioService.getUserById(Number(req.params.id));
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return res.status(500).json({ error: 'Erro ao buscar usuário. Tente novamente mais tarde.' });
    }
  }

  // Método para atualizar informações do usuário
  async updateUser(req: Request, res: Response) {
    try {
      const user = await UsuarioService.updateUser(Number(req.params.id), req.body);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado para atualização.' });
      }
      return res.status(200).json({ message: 'Usuário atualizado com sucesso.', user });
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      return res.status(500).json({ error: 'Não foi possível atualizar os dados do usuário. Tente novamente mais tarde.' });
    }
  }
}

export default new UserController();
