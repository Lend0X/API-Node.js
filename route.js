
const express = require('express');
const router = express.Router();
const EnderecoController = require('./controllers/EnderecoController');


router.post('/endereco/:cep', EnderecoController.buscarEAdicionarEndereco);

module.exports = router;
