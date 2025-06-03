const express = require('express');
const app = express();
app.use(express.json());

app.use('/pacientes', require('./routes/pacientes'));
app.use('/medicos', require('./routes/medicos'));
app.use('/planos', require('./routes/planos'));
app.use('/consultas', require('./routes/consultas'));
app.use('/relatorios', require('./routes/relatorios'));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
