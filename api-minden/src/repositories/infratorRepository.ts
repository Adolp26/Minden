
import { Infrator, InfratorCreationAttributes } from '../models/infratorModel';

export class InfratorRepository {
  async create(data: InfratorCreationAttributes): Promise<Infrator> {
    return await Infrator.create(data);
  }

  async findAll(): Promise<Infrator[]> {
    return await Infrator.findAll();
  }

  async findById(id: number): Promise<Infrator | null> {
    return await Infrator.findByPk(id);
  }

  async update(id: number, data: Partial<InfratorCreationAttributes>): Promise<[number, Infrator[]]> {
    const [affectedCount] = await Infrator.update(data, {
      where: { id },
      returning: true
    });
    const updatedInfrator = await this.findById(id);
    return [affectedCount, updatedInfrator ? [updatedInfrator] : []];
  }

  async delete(id: number): Promise<number> {
    return await Infrator.destroy({
      where: { id }
    });
  }
}