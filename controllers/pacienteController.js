const db = require('../db/knex');

exports.criarPaciente = async (req, res) => {
  try {
    const { nome, endereco, data_nascimento, telefone, plano_saude_id } = req.body;

    const [id] = await db('paciente').insert({
      nome,
      endereco,
      data_nascimento,
      telefone,
      plano_saude_id
    }).returning('id');

    res.status(201).json({ id, mensagem: 'Paciente cadastrado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar paciente', detalhes: err.message });
  }
};

exports.listarPacientes = async (req, res) => {
  try {
    const pacientes = await db('paciente').select('*');
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar pacientes', detalhes: err.message });
  }
};
