const express = require('express');
const router = express.Router();
const EnderecoController = require('./EnderecoController');


router.post('/enderecos/:cep', EnderecoController.criarEnderecoPorCep);

module.exports = router;

