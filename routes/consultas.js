const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.post('/', consultaController.criarConsulta);
// você pode adicionar rota GET aqui também
module.exports = router;
