
import { Request, Response } from 'express';
import { InfratorService } from '../services/infratorService';

class InfratorController {
  private static service: InfratorService = new InfratorService();

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const infrator = await InfratorController.service.createInfrator(req.body);
      return res.status(201).json(infrator);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar infrator' });
    }
  }

  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const infratores = await InfratorController.service.getAllInfratores();
      return res.status(200).json(infratores);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar infratores' });
    }
  }

  static async getById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const infrator = await InfratorController.service.getInfratorById(id);
      
      if (!infrator) {
        return res.status(404).json({ error: 'Infrator não encontrado' });
      }

      return res.status(200).json(infrator);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar infrator' });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const [affected, infrator] = await InfratorController.service.updateInfrator(id, req.body);

      if (affected === 0) {
        return res.status(404).json({ error: 'Infrator não encontrado' });
      }

      return res.status(200).json(infrator[0]);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar infrator' });
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const deleted = await InfratorController.service.deleteInfrator(id);

      if (deleted === 0) {
        return res.status(404).json({ error: 'Infrator não encontrado' });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar infrator' });
    }
  }
}

export default InfratorController;
