import { Request, Response } from 'express';
import AvaliacaoService from '../services/avaliacaoService';

class AvaliacaoController {
  // Criar avaliação
  public async create(req: Request, res: Response) {
    try {
      const avaliacao = await AvaliacaoService.create(req.body);
      res.status(201).json(avaliacao);
    } catch (error) {
      // Enviando mensagem de erro como JSON
      res.status(500).json({ message: 'Erro ao criar avaliação', error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  // Obter todas as avaliações
  public async getAll(req: Request, res: Response) {
    try {
      const avaliacoes = await AvaliacaoService.getAll();
      res.status(200).json(avaliacoes);
    } catch (error) {
      // Enviando mensagem de erro como JSON
      res.status(500).json({ message: 'Erro ao buscar avaliações', error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  // Obter avaliação por ID
  public async getById(req: Request, res: Response) {
    try {
      const avaliacao = await AvaliacaoService.getById(Number(req.params.id));
      res.status(200).json(avaliacao);
    } catch (error) {
      // Enviando mensagem de erro como JSON
      res.status(500).json({ message: 'Erro ao buscar avaliação por ID', error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  // Atualizar avaliação
  public async update(req: Request, res: Response) {
    try {
      const avaliacao = await AvaliacaoService.update(Number(req.params.id), req.body);
      res.status(200).json(avaliacao);
    } catch (error) {
      // Enviando mensagem de erro como JSON
      res.status(500).json({ message: 'Erro ao atualizar avaliação', error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }

  // Deletar avaliação
  public async delete(req: Request, res: Response) {
    try {
      await AvaliacaoService.delete(Number(req.params.id));
      res.status(200).json({ message: 'Avaliacao deletada com sucesso' });
    } catch (error) {
      // Enviando mensagem de erro como JSON
      res.status(500).json({ message: 'Erro ao deletar avaliação', error: error instanceof Error ? error.message : 'Erro desconhecido' });
    }
  }
}

export default new AvaliacaoController();
