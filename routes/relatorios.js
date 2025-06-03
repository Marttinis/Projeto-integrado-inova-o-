const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

router.get('/financeiro', relatorioController.resumoMensal);
module.exports = router;
