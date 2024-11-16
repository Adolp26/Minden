// src/controllers/instituicaoController.ts
import { Request, Response } from 'express';
import InstituicaoService from '../services/instituicaoService';

class InstituicaoController {
  async create(req: Request, res: Response) {
    try {
      const instituicao = await InstituicaoService.createInstituicao(req.body);
      return res.status(201).json(instituicao);
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: 'Erro ao criar instituição' });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const instituicoes = await InstituicaoService.getAllInstituicoes();
      return res.status(200).json(instituicoes);
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Erro ao buscar instituições' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const instituicao = await InstituicaoService.getInstituicaoById(id);
      return res.status(200).json(instituicao);
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(404).json({ error: 'Erro ao buscar instituição' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const instituicao = await InstituicaoService.updateInstituicao(id, req.body);
      return res.status(200).json(instituicao);
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: 'Erro ao atualizar instituição' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await InstituicaoService.deleteInstituicao(id);
      return res.status(204).send();
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(404).json({ error: error.message });
      }
      return res.status(404).json({ error: 'Erro ao deletar instituição' });
    }
  }
}

export default new InstituicaoController();