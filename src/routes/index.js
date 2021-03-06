const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title: "API - Fornecedores de Alimentos e Bebidas - Recife",
    version: "1.1.0",
    label: "Projeto de conclusão de curso",
    turma: "on7 Backend Minas",
    owner: "github.com/lealclarissa"
  });
});

module.exports = router;
