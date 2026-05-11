// importação do modulo exprex
const exprex = require("express");
const app = exprex();
//modulo do node para lidar com caminho de arquivos
const path = require(`path`);
//Define a porta do servidor
const port = 3000;

//Configuração do ejs e pastas do front end
//Define o ejs como engine do front
app.set("view engine", "ejs");
//Aponta para o express e ejs onde estão as paginas
app.set("views", path.join(__dirname, "../client/views"));
//Deixa a pasta public acessivel ao usuario
app.set(exprex.static(path.join(__dirname, "../client/public")));

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

app.get("/cadastro", (req, res) => {
  res.render('auth/cadastro');
});

//Importar as rotas de usuário
const usuáriosRoutes = require("./routes/usuarioRoutes.js");

//Requisições começando com /usuarios é gerenciada pelo sub-arquivo de rotas
app.use("/usuarios", usuáriosRoutes);

app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port} `);
  console.log(`Link: http://localhost:${port}`);
});
