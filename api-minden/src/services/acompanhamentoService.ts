
import { AcompanhamentoRepository } from '../repositories/acompanhamentoRepository';
import { Acompanhamento, AcompanhamentoCreationAttributes } from '../models/acompanhamentoModel';

export class AcompanhamentoService {
  private repository: AcompanhamentoRepository;

  constructor() {
    this.repository = new AcompanhamentoRepository();
  }

  async create(data: AcompanhamentoCreationAttributes): Promise<Acompanhamento> {
    return await this.repository.create(data);
  }

  async findAll(): Promise<Acompanhamento[]> {
    return await this.repository.findAll();
  }

  async findById(id: number): Promise<Acompanhamento | null> {
    return await this.repository.findById(id);
  }

  async update(id: number, data: Partial<AcompanhamentoCreationAttributes>): Promise<[number, Acompanhamento[]]> {
    return await this.repository.update(id, data);
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id);
  }

  async findByInfratorId(infratorId: number): Promise<Acompanhamento[]> {
    return await this.repository.findByInfratorId(infratorId);
  }

  async findByAtividadeId(atividadeId: number): Promise<Acompanhamento[]> {
    return await this.repository.findByAtividadeId(atividadeId);
  }

  async findByDataParticipacao(data: Date): Promise<Acompanhamento[]> {
    return await this.repository.findByDataParticipacao(data);
  }
}