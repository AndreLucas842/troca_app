// importação do modulo exprex
const express = require("express");
const app = express();
//modulo do node para lidar com caminho de arquivos
const path = require(`path`);

//Importa o módulo do dotenv, lê o arquivo .env, e já configura inicialmente
require('dotenv').config()

//Define a porta do servidor com base nas variaveis
//Se der errado, a porta será a 5000
const port = process.env.port || 5000;

//Middleware para entender o json
//Lê dados em json
app.use(express.json());
//Servidor está apto a ler os dados dos formulario
app.use(express.urlencoded({extends:true}))
//Permite ler cookies e alterar também
app.use(require('cookie-parser')())

//Configuração do ejs e pastas do front end
//Define o ejs como engine do front
app.set("view engine", "ejs");
//Aponta para o express e ejs onde estão as paginas
app.set("views", path.join(__dirname, "../client/views"));
//Deixa a pasta public acessivel ao usuario
app.set(express.static(path.join(__dirname, "../client/public")));

//ROtAS PÚBLICAS
//Criação de rotas padrão
app.get("/", (req, res) => {
//Redireciona para tela de login
  res.status(200).redirect("/login");
});

//Rota que retorna a página de login
app.get("/login", (req, res) => {
  res.render('auth/login');
});

//Rota que retorna a página de cadastro de usuário
app.get("/cadastro", (req, res) => {
  res.render('auth/cadastro');
});

//Importar as rotas de usuário
const usuáriosRoutes = require("./routes/usuarioRoutes.js");

//Requisições começando com /usuarios é gerenciada pelo sub-arquivo de rotas
app.use("/usuarios", usuáriosRoutes);

//app.listen(port, () => {
//  console.log(`Servidor ativo na porta: ${port} `);
//  console.log(`Link: http://localhost:${port}`);
//});


// Traz as configurações do banco
 const pool = require('./config/db.js');
// Cria uma conexão teste com o banco
(async () => {
  try {
    // Se o banco de dados estiver ativo, ai sim o servidor será iniciado
    await pool.getConnection();
    console.log("Banco conectado");

    // Se o banco de dados estiver ativo, ai sim o servidor será iniciado
    app.listen(port, () => {
      console.log(`Link http://localhost:${port}`);
      console.log(`Servidor funcionando na porta ${port}`);
    });

  } catch (erro) {
    // Se deu erro, avisa e encerra a tentativa
    console.log("Erro ao tentar conectar com o banco de dados");
    process.exit(1);
  }
})();