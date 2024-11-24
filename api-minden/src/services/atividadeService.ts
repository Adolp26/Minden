
// src/services/AtividadeService.ts
import { AtividadeRepository } from '../repositories/atividadeRepository';
import { Atividade, AtividadeCreationAttributes } from '../models/atividadeModel';

export class AtividadeService {
  private repository: AtividadeRepository;

  constructor() {
    this.repository = new AtividadeRepository();
  }

  async createAtividade(data: AtividadeCreationAttributes): Promise<Atividade> {
    try {
      return await this.repository.create(data);
    } catch (error) {
      console.log('Erro ao criar atividade no service:', error);
      throw new Error('Não foi possível criar a atividade');
    }
  }

  async getAllAtividades(): Promise<Atividade[]> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      console.log('Erro ao buscar todas atividades no service:', error);
      throw new Error('Erro ao buscar atividades');
    }
  }

  async getAtividadeById(id: number): Promise<Atividade> {
    try {
      const atividade = await this.repository.findById(id);
      if (!atividade) {
        throw new Error('Atividade não encontrada');
      }
      return atividade;
    } catch (error) {
      console.log(`Erro ao buscar atividade ${id} no service:`, error);
      throw new Error('Erro ao buscar atividade');
    }
  }

  async updateAtividade(id: number, data: Partial<AtividadeCreationAttributes>): Promise<Atividade> {
    try {
      const [updatedCount, updatedAtividades] = await this.repository.update(id, data);
      if (updatedCount === 0) {
        throw new Error('Atividade não encontrada');
      }
      return updatedAtividades[0];
    } catch (error) {
      console.log(`Erro ao atualizar atividade ${id} no service:`, error);
      throw new Error('Não foi possível atualizar a atividade');
    }
  }

  async deleteAtividade(id: number): Promise<void> {
    try {
      const deletedCount = await this.repository.delete(id);
      if (deletedCount === 0) {
        throw new Error('Atividade não encontrada');
      }
    } catch (error) {
      console.log(`Erro ao deletar atividade ${id} no service:`, error);
      throw new Error('Não foi possível deletar a atividade');
    }
  }

  async getAtividadesByStatus(status: string): Promise<Atividade[]> {
    try {
      return await this.repository.findByStatus(status);
    } catch (error) {
      console.log(`Erro ao buscar atividades com status ${status} no service:`, error);
      throw new Error('Erro ao buscar atividades por status');
    }
  }

  async getAtividadesByResponsavel(responsavelId: number): Promise<Atividade[]> {
    try {
      return await this.repository.findByResponsavel(responsavelId);
    } catch (error) {
      console.log(`Erro ao buscar atividades do responsável ${responsavelId} no service:`, error);
      throw new Error('Erro ao buscar atividades do responsável');
    }
  }
}
