import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());

// Configuração das opções do Swagger
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Node.js + TypeORM",
      version: "1.0.0",
      description: "Documentação da API desenvolvida para o projeto MVP",
    },
    servers: [
      {
        url: "http://localhost:3333",
        description: "Servidor Local",
      },
    ],
  },
  // Mapeia onde o Swagger vai procurar os comentários JSDoc de documentação
  apis: ["./src/server.ts", "./src/controllers/*.ts", "./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rota para expor a interface do Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /:
 *   get:
 *     summary: Rota inicial de verificação de status
 *     tags:
 *       - Status
 *     responses:
 *       200:
 *         description: API a funcionar corretamente.
 */
app.get("/", (req, res) => {
  return res.json({ message: "API TypeScript + TypeORM rodando!" });
});

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida!");

    app.listen(3333, () => {
      console.log("Servidor rodando na porta 3333 🚀");
      console.log("Documentação Swagger disponível em: http://localhost:3333/docs 📚");
    });
  })
  .catch((error: unknown) => {
    console.error("Erro ao inicializar a conexão com o banco de dados:", error);
  });