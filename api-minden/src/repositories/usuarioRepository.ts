import { Usuario } from '../models/usuarioModel';

class usuarioRepository {
  // Criação de um novo usuário
  async create(userData: any) {
    return await Usuario.create(userData);
  }

  // Busca um usuário por email
  async findByEmail(email: string) {
    return await Usuario.findOne({ where: { email } });
  }

  // Busca um usuário por ID
  async findById(id: number) {
    return await Usuario.findByPk(id);
  }

  // Atualiza um usuário
  async update(id: number, userData: any) {
    const user = await Usuario.findByPk(id);
    if (user) {
      return await user.update(userData);
    }
    return null;
  }
}

export default new usuarioRepository();
