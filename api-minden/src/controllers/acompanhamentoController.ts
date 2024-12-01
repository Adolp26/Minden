import { Request, Response } from 'express';
import { AcompanhamentoService } from '../services/acompanhamentoService';

export class AcompanhamentoController {
  private static service = new AcompanhamentoService();

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const acompanhamento = await AcompanhamentoController.service.create(req.body);
      return res.status(201).json(acompanhamento);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar acompanhamento' });
    }
  }

  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const acompanhamentos = await AcompanhamentoController.service.findAll();
      return res.status(200).json(acompanhamentos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar acompanhamentos' });
    }
  }

  static async getById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const acompanhamento = await AcompanhamentoController.service.findById(id);
      if (!acompanhamento) {
        return res.status(404).json({ error: 'Acompanhamento não encontrado' });
      }
      return res.status(200).json(acompanhamento);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar acompanhamento' });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const [affectedCount, affectedRows] = await AcompanhamentoController.service.update(id, req.body);
      if (affectedCount === 0) {
        return res.status(404).json({ error: 'Acompanhamento não encontrado' });
      }
      return res.status(200).json(affectedRows[0]);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar acompanhamento' });
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const deletedCount = await AcompanhamentoController.service.delete(id);
      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Acompanhamento não encontrado' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar acompanhamento' });
    }
  }

  static async getByInfratorId(req: Request, res: Response): Promise<Response> {
    try {
      const infratorId = parseInt(req.params.infratorId);
      const acompanhamentos = await AcompanhamentoController.service.findByInfratorId(infratorId);
      return res.status(200).json(acompanhamentos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar acompanhamentos por infrator' });
    }
  }

  static async getByAtividadeId(req: Request, res: Response): Promise<Response> {
    try {
      const atividadeId = parseInt(req.params.atividadeId);
      const acompanhamentos = await AcompanhamentoController.service.findByAtividadeId(atividadeId);
      return res.status(200).json(acompanhamentos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar acompanhamentos por atividade' });
    }
  }

  static async getByDataParticipacao(req: Request, res: Response): Promise<Response> {
    try {
      const data = new Date(req.params.data);
      const acompanhamentos = await AcompanhamentoController.service.findByDataParticipacao(data);
      return res.status(200).json(acompanhamentos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar acompanhamentos por data' });
    }
  }
}
