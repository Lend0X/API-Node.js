const express = require('express');
const axios = require('axios');
const cepRegex = /^[0-9]{5}-?[0.9]{3}$/;
cepRegex.test(cep);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep; // Obtendo o CEP da URL

    try {
        // Fazendo a requisição para a API do ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data); // retorna os dados da resposta
    }catch (error) {
        console.error('Erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar o CEP');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Endereco = sequelize.define('Endereco', {
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Endereco;
