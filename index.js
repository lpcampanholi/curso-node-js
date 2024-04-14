import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao meu app");
});

app.get("/:nome/:cargo", (req, res) => {
  res.send(
    `<h2>Nome: ${req.params.nome}</h2>` + `<h2>Cargo: ${req.params.cargo}</h2>`
  );
});

app.get("/blog", (req, res) => {
  res.send("Seja bem-vindo ao meu blog");
});

app.listen(8081, () => {
  console.log("Servidor rodando na url http://localhost:8081");
});
