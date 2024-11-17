// src/services/InfratorService.ts
import { InfratorRepository } from '../repositories/infratorRepository';
import { Infrator, InfratorCreationAttributes } from '../models/infratorModel';

export class InfratorService {
  private repository: InfratorRepository;

  constructor() {
    this.repository = new InfratorRepository();
  }

  async createInfrator(data: InfratorCreationAttributes): Promise<Infrator> {
    return await this.repository.create(data);
  }

  async getAllInfratores(): Promise<Infrator[]> {
    return await this.repository.findAll();
  }

  async getInfratorById(id: number): Promise<Infrator | null> {
    return await this.repository.findById(id);
  }

  async updateInfrator(id: number, data: Partial<InfratorCreationAttributes>): Promise<[number, Infrator[]]> {
    return await this.repository.update(id, data);
  }

  async deleteInfrator(id: number): Promise<number> {
    return await this.repository.delete(id);
  }
}