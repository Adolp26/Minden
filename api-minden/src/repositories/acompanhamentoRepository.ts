import { Acompanhamento, AcompanhamentoCreationAttributes } from '../models/acompanhamentoModel';

export class AcompanhamentoRepository {
  async create(data: AcompanhamentoCreationAttributes): Promise<Acompanhamento> {
    return await Acompanhamento.create(data);
  }

  async findAll(): Promise<Acompanhamento[]> {
    return await Acompanhamento.findAll();
  }

  async findById(id: number): Promise<Acompanhamento | null> {
    return await Acompanhamento.findByPk(id);
  }

  async update(id: number, data: Partial<AcompanhamentoCreationAttributes>): Promise<[number, Acompanhamento[]]> {
    const [affectedCount, affectedRows] = await Acompanhamento.update(data, {
      where: { id },
      returning: true
    });
    return [affectedCount, affectedRows];
  }

  async delete(id: number): Promise<number> {
    return await Acompanhamento.destroy({
      where: { id }
    });
  }

  async findByInfratorId(infratorId: number): Promise<Acompanhamento[]> {
    return await Acompanhamento.findAll({
      where: { infrator_id: infratorId }
    });
  }

  async findByAtividadeId(atividadeId: number): Promise<Acompanhamento[]> {
    return await Acompanhamento.findAll({
      where: { atividade_id: atividadeId }
    });
  }

  async findByDataParticipacao(data: Date): Promise<Acompanhamento[]> {
    return await Acompanhamento.findAll({
      where: { data_participacao: data }
    });
  }
}