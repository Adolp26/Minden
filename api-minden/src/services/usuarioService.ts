import UserRepository from '../repositories/usuarioRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';
import { UsuarioCreationAttributes } from '../models/usuarioModel';

class UsuarioService {
  // Cadastro de um novo usuário
  async register(userData: UsuarioCreationAttributes) {
    const existingUser = await UserRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email já cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(userData.senha, 10);
    userData.senha = hashedPassword;

    return await UserRepository.create(userData);
  }

  // Login do usuário
  async login(email: string, senha: string) {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas.');
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw new Error('Credenciais inválidas.');
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.tipo_de_instituicao }, JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
  }

  // Busca usuário por ID
  async getUserById(id: number) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    return user;
  }

  // Atualiza informações do usuário
  async updateUser(id: number, userData: any) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    return await UserRepository.update(id, userData);
  }
}

export default new UsuarioService();
