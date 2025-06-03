const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Gabmed123',
    database : 'consultas_db'
  }
});

module.exports = knex;
