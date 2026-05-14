// importa a configuração do banco
const db = require("../config/db.js")

module.exports = {
    // Busca o usuário na tabela, com o email fornecido
    buscarPorEmail: async (email) =>{
        //Query para fazer a consulta no banco
        const query = 'SELECT * FROM usuarios WHERE email = ?'
        //Guarda o resultado da consulta na variavel
        const [linhas] = await db.execute(query, [email])
        //Retorna por controller o resultado, nesse caso o usuario encontrado
        return linhas[0]
    }
    ,
    //CRUD
    //CREATE
    criarUsuario : async (nome, email, senha, telefone, foto, perfil) =>{
        //Query pra fazer a consulta no banco
        const query = 'INSERT INTO usuarios (nome, email, senha, telefone, foto, perfil) VALUES (?,?,?,?,?,?)'
        //Guarda o resultado da consulta na variável
        const [resultado] = await db.execute([nome, email, senha, telefone, foto, perfil])
        //Retorna pro controller o resultado, nesse caso o id do usuario inserido
        return resultado.insertId
    }
}