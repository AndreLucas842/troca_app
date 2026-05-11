//importação do modulo express
const express = require("express");

const router = express.Router();

//Declaração das rotas do usuario
//Obtém a lista de usuários
router.get("/", (req,res) => {
    res.json(200).json({"mensagem": "Peguei a lista de usuários"});
});

//Retornar a página de cadastro
router.get("/cadastro", (req,res) => {
    res.json({mensagem:"Estou na página de cadastro"});
});


module.exports = router