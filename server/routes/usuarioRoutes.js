//importação do modulo express
const express = require("express");
const router = express.Router();

//Importar o controller do usuario
const usuarioController = require("../controllers/usuarioController.js")

//Declaração das rotas do usuario
//Rotas públicas
//Envia os dados de login
router.post("/login", usuarioController.login)

//Rota de saída
router.get("/lougout", usuarioController.logout)

//Rotas privadas

//Obtém a lista de usuários
router.get("/", (req,res) => {
    res.json(200).json({"mensagem": "Peguei a lista de usuários"});
});

//Retornar a página de cadastro
router.get("/cadastro", (req,res) => {
    res.json({mensagem:"Estou na página de cadastro"});
});


module.exports = router