import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  return res.json({ message: "API TypeScript + TypeORM rodando!" });
});


AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida!");

    app.listen(3333, () => {
      console.log("Servidor rodando na porta 3333 🚀");
    });
  })
  .catch((error: unknown) => {
    console.error("Erro ao inicializar a conexão com o banco de dados:", error);
  });
