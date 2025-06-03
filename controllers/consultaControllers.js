const db = require('../db/knex');

exports.criarConsulta = async (req, res) => {
  try {
    const { data, valor, paciente_id, medico_id } = req.body;

    const paciente = await db('paciente').where({ id: paciente_id }).first();
    if (!paciente) return res.status(404).json({ erro: 'Paciente não encontrado' });

    const plano = await db('planodesaude').where({ id: paciente.plano_saude_id }).first();
    const hoje = new Date();

    if (!plano || new Date(plano.data_vencimento) < hoje) {
      return res.status(400).json({ erro: 'Plano de saúde inválido ou vencido' });
    }

    const [id] = await db('consulta').insert({ data, valor, paciente_id, medico_id }).returning('id');
    res.status(201).json({ id, mensagem: 'Consulta agendada com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao agendar consulta', detalhes: err.message });
  }
};
