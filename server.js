const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://Endereco do Banco",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) console.log(err);
    else console.log("conectado com successo !");
  }
);

requireDir("./src/models");

//primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001, err => {
  if (err) console.log(err);
  else console.log("serviço rodando na porta 3001 !");
});
