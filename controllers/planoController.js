const db = require('../db/knex');

exports.criarPlano = async (req, res) => {
  try {
    const { limite_cobertura, data_vencimento } = req.body;

    const [id] = await db('planodesaude').insert({
      limite_cobertura,
      data_vencimento
    }).returning('id');

    res.status(201).json({ id, mensagem: 'Plano de saúde cadastrado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar plano de saúde', detalhes: err.message });
  }
};

exports.listarPlanos = async (req, res) => {
  try {
    const planos = await db('planodesaude').select('*');
    res.json(planos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar planos de saúde', detalhes: err.message });
  }
};