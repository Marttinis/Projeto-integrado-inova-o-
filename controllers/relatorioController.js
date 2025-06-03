const db = require('../db/knex');

exports.resumoMensal = async (req, res) => {
  try {
    const relatorio = await db('consulta')
      .select(
        db.raw("TO_CHAR(data, 'YYYY-MM') AS mes"),
        db.raw("SUM(valor) AS total")
      )
      .groupBy('mes')
      .orderBy('mes');

    res.json(relatorio);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao gerar relatório', detalhes: err.message });
  }
};
