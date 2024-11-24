import { Atividade, AtividadeCreationAttributes } from '../models/atividadeModel';

export class AtividadeRepository {
  async create(data: AtividadeCreationAttributes): Promise<Atividade> {
    return await Atividade.create(data);
  }

  async findAll(): Promise<Atividade[]> {
    return await Atividade.findAll();
  }

  async findById(id: number): Promise<Atividade | null> {
    return await Atividade.findByPk(id);
  }

  async update(id: number, data: Partial<AtividadeCreationAttributes>): Promise<[number, Atividade[]]> {
    return await Atividade.update(data, {
      where: { id },
      returning: true
    });
  }

  async delete(id: number): Promise<number> {
    return await Atividade.destroy({
      where: { id }
    });
  }

  async findByStatus(status: string): Promise<Atividade[]> {
    return await Atividade.findAll({
      where: { status }
    });
  }

  async findByResponsavel(responsavelId: number): Promise<Atividade[]> {
    return await Atividade.findAll({
      where: { responsavel_id: responsavelId }
    });
  }
}
