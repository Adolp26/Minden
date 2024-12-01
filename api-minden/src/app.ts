import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes'
import instituicaoRoutes from './routes/instituicaoRoutes'
import infratorRoutes from './routes/infratorRoutes'
import atividadeRoutes from './routes/atividadeRoutes';
import acompanhamentoRoutes from './routes/acompanhamentoRoutes'
import avaliacaoRoutes from './routes/avaliacaoRoutes';
const app = express();

app.use(cors());

app.use(express.json()); // Para suportar JSON no body

// Rota de teste para verificar se a aplicação está funcionando
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Funcione man' });
});

// Aqui você pode adicionar outras rotas, como:
app.use('/api/usuarios', usuarioRoutes); // Rotas de cliente

//Rotas para instituições
app.use('/api/instituicoes', instituicaoRoutes);

//Rotas para o infrator
app.use ('/api/infratores', infratorRoutes)

//Rotas para as atividades
app.use('/api/atividades', atividadeRoutes);

//Rotas para o acompanhamento
app.use('/api/acompanhamentos', acompanhamentoRoutes);

app.use('api/avaliacao', avaliacaoRoutes);

export default app;