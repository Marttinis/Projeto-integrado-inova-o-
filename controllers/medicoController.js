const db = require('../db/knex');

exports.criarMedico = async (req, res) => {
  try {
    const { nome, especialidade } = req.body;

    const [id] = await db('medico').insert({ nome, especialidade }).returning('id');

    res.status(201).json({ id, mensagem: 'Médico cadastrado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar médico', detalhes: err.message });
  }
};

exports.listarMedicos = async (req, res) => {
  try {
    const medicos = await db('medico').select('*');
    res.json(medicos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar médicos', detalhes: err.message });
  }
};