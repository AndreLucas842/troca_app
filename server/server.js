// importação do modulo exprex
const exprex = require("express");

const app = exprex();

//modulo do node para lidar com caminho de arquivos
const path = require(`path`);

console.log(path.join(__dirname, ":estou aqui"));
const port = 3000;

//Criação de rotas padrão
app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "Olá, seja Bem Vindo" });
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/auth/login.html"));
});

app.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/auth/cadastro.html"));
});

//Importar as rotas de usuário
const usuáriosRoutes = require("./routes/usuarioRoutes.js");

//Requisições começando com /usuarios é gerenciada pelo sub-arquivo de rotas
app.use("/usuarios", usuáriosRoutes);

app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port} `);
  console.log(`Link: http://localhost:${port}`);
});
