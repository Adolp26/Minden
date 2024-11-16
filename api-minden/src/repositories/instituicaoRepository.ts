// src/repositories/instituicaoRepository.ts
import { Instituicao, InstituicaoCreationAttributes } from '../models/instituicaoModel';

class InstituicaoRepository {
  async create(data: InstituicaoCreationAttributes) {
    return await Instituicao.create(data);
  }

  async findAll() {
    return await Instituicao.findAll();
  }

  async findById(id: number) {
    return await Instituicao.findByPk(id);
  }

  async update(id: number, data: Partial<InstituicaoCreationAttributes>) {
    const instituicao = await Instituicao.findByPk(id);
    if (!instituicao) {
      throw new Error('Instituição não encontrada');
    }
    return await instituicao.update(data);
  }

  async delete(id: number) {
    const instituicao = await Instituicao.findByPk(id);
    if (!instituicao) {
      throw new Error('Instituição não encontrada');
    }
    await instituicao.destroy();
    return true;
  }

  async findByNome(nome: string) {
    return await Instituicao.findOne({
      where: { nome }
    });
  }
}

export default new InstituicaoRepository();