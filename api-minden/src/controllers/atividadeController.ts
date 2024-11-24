// src/controllers/AtividadeController.ts
import { Request, Response } from 'express';
import { AtividadeService } from '../services/atividadeService';

export class AtividadeController {
  private static service = new AtividadeService();

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const atividade = await AtividadeController.service.createAtividade(req.body);
      return res.status(201).json(atividade);
    } catch (error) {
      console.log('Erro no controller - create:', error);
      return res.status(400).json({ message: 'Erro ao criar atividade' });
    }
  }

  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const atividades = await AtividadeController.service.getAllAtividades();
      return res.json(atividades);
    } catch (error) {
      console.log('Erro no controller - getAll:', error);
      return res.status(500).json({ message: 'Erro ao buscar atividades' });
    }
  }

  static async getById(req: Request, res: Response): Promise<Response> {
    try {
      const atividade = await AtividadeController.service.getAtividadeById(Number(req.params.id));
      return res.json(atividade);
    } catch (error) {
      console.log('Erro no controller - getById:', error);
      return res.status(404).json({ message: 'Atividade não encontrada' });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const atividade = await AtividadeController.service.updateAtividade(Number(req.params.id), req.body);
      return res.json(atividade);
    } catch (error) {
      console.log('Erro no controller - update:', error);
      return res.status(400).json({ message: 'Erro ao atualizar atividade' });
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      await AtividadeController.service.deleteAtividade(Number(req.params.id));
      return res.status(204).send();
    } catch (error) {
      console.log('Erro no controller - delete:', error);
      return res.status(400).json({ message: 'Erro ao deletar atividade' });
    }
  }

  static async getByStatus(req: Request, res: Response): Promise<Response> {
    try {
      const atividades = await AtividadeController.service.getAtividadesByStatus(String(req.params.status));
      return res.json(atividades);
    } catch (error) {
      console.log('Erro no controller - getByStatus:', error);
      return res.status(500).json({ message: 'Erro ao buscar atividades por status' });
    }
  }

  static async getByResponsavel(req: Request, res: Response): Promise<Response> {
    try {
      const atividades = await AtividadeController.service.getAtividadesByResponsavel(Number(req.params.responsavelId));
      return res.json(atividades);
    } catch (error) {
      console.log('Erro no controller - getByResponsavel:', error);
      return res.status(500).json({ message: 'Erro ao buscar atividades do responsável' });
    }
  }
}
