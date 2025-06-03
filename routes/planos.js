const express = require('express');
const router = express.Router();
const planoController = require('../controllers/planoController');

router.post('/', planoController.criarPlano);
router.get('/', planoController.listarPlanos);

module.exports = router;

