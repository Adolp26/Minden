import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes'
const app = express();

app.use(express.json()); // Para suportar JSON no body

// Rota de teste para verificar se a aplicação está funcionando
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API está funcionando!' });
});

// Aqui você pode adicionar outras rotas, como:
app.use('/api', usuarioRoutes); // Rotas de cliente
// app.use('/api/funcionarios', funcionarioRoutes); // Rotas do funcionário
// app.use('/api


export default app;