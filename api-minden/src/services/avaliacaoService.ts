import AvaliacaoRepository from '../repositories/avaliacaoRepository';

class AvaliacaoService {
  public async create(data: any) {
    return await AvaliacaoRepository.create(data);
  }

  public async getAll() {
    return await AvaliacaoRepository.findAll();
  }

  public async getById(id: number) {
    const avaliacao = await AvaliacaoRepository.findById(id);
    if (!avaliacao) {
      throw new Error('Avaliacao não encontrada');
    }
    return avaliacao;
  }

  public async update(id: number, data: any) {
    const avaliacao = await AvaliacaoRepository.update(id, data);
    if (!avaliacao) {
      throw new Error('Avaliacao não encontrada para atualização');
    }
    return avaliacao;
  }

  public async delete(id: number) {
    const result = await AvaliacaoRepository.delete(id);
    if (!result) {
      throw new Error('Avaliacao não encontrada para exclusão');
    }
    return result;
  }
}

export default new AvaliacaoService();
