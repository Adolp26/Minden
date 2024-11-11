import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';

// Extende a interface Request para incluir a propriedade user
interface CustomRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Acesso não autorizado. Token não encontrado.' });
  }

  const token = authHeader.split(' ')[1];
  
  // Verificar se o token tem o formato correto (Bearer <token>)
  if (!token) {
    return res.status(400).json({ message: 'Token mal formatado.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string };

    // Adiciona um console.log para ver o conteúdo do token decodificado
    console.log('JWT Decodificado:', decoded);

    req.user = { id: decoded.id, email: decoded.email }; // Adiciona o usuário ao objeto de request
    next();
  } catch (error) {
    // Tratar diferentes tipos de erros
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Token expirado.' });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Token inválido.' });
    } else {
      return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  }
};
