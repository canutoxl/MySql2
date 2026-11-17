
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import agendamentosRoutes from './routes/agendamentos.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sistema de Agendamento Médico funcionando!');
});

app.use('/api/agendamentos', agendamentosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
