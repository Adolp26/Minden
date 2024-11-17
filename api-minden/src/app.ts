import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes'
import instituicaoRoutes from './routes/instituicaoRoutes'
import infratorRoutes from './routes/infratorRoutes'
const app = express();

app.use(express.json()); // Para suportar JSON no body

// Rota de teste para verificar se a aplicação está funcionando
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API está funcionando meu consagrado!' });
});

// Aqui você pode adicionar outras rotas, como:
app.use('/api/usuarios', usuarioRoutes); // Rotas de cliente

//Rotas para instituições
app.use('/api/instituicoes', instituicaoRoutes);

//Rotas para o infrator
app.use ('/api/infratores', infratorRoutes)

export default app;