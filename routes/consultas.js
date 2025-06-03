const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaControllers');

router.post('/', consultaController.criarConsulta);
// você pode adicionar rota GET aqui também
module.exports = router;
