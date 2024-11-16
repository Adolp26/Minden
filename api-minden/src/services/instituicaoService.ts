import InstituicaoRepository from '../repositories/instituicaoRepository';
import { InstituicaoCreationAttributes } from '../models/instituicaoModel';

class InstituicaoService {
  async createInstituicao(data: InstituicaoCreationAttributes) {
    // Verifica se já existe uma instituição com o mesmo nome
    const existingInstituicao = await InstituicaoRepository.findByNome(data.nome);
    if (existingInstituicao) {
      throw new Error('Já existe uma instituição com este nome.');
    }

    return await InstituicaoRepository.create(data);
  }

  async getAllInstituicoes() {
    return await InstituicaoRepository.findAll();
  }

  async getInstituicaoById(id: number) {
    const instituicao = await InstituicaoRepository.findById(id);
    if (!instituicao) {
      throw new Error('Instituição não encontrada.');
    }
    return instituicao;
  }

  async updateInstituicao(id: number, data: Partial<InstituicaoCreationAttributes>) {
    // Se o nome estiver sendo atualizado, verifica duplicidade
    if (data.nome) {
      const existingInstituicao = await InstituicaoRepository.findByNome(data.nome);
      if (existingInstituicao && existingInstituicao.id !== id) {
        throw new Error('Já existe uma instituição com este nome.');
      }
    }

    return await InstituicaoRepository.update(id, data);
  }

  async deleteInstituicao(id: number) {
    return await InstituicaoRepository.delete(id);
  }
}

export default new InstituicaoService();