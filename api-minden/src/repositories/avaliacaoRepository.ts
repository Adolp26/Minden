import Avaliacao  from '../models/avaliacaoModel';

class AvaliacaoRepository {
  public async create(data: any) {
    return await Avaliacao.create(data);
  }

  public async findAll() {
    return await Avaliacao.findAll();
  }

  public async findById(id: number) {
    return await Avaliacao.findByPk(id);
  }

  public async update(id: number, data: any) {
    const avaliacao = await Avaliacao.findByPk(id);
    if (avaliacao) {
      return await avaliacao.update(data);
    }
    return null;
  }

  public async delete(id: number) {
    const avaliacao = await Avaliacao.findByPk(id);
    if (avaliacao) {
      return await avaliacao.destroy();
    }
    return null;
  }
}

export default new AvaliacaoRepository();
