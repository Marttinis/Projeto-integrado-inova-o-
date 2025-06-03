const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.post('/', medicoController.criarMedico);
router.get('/', medicoController.listarMedicos);

module.exports = router;
