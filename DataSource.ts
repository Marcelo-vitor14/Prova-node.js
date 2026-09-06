import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "./models/User"; 
import { Car } from "./entities/Car";
import { Rental } from "./entities/Rental";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME ?? "postgres",
  password: process.env.DB_PASSWORD ?? "postgre",
  database: process.env.DB_DATABASE ?? "projeto",
  synchronize: true,
  logging: false,
  entities: [User, Car, Rental], 
  migrations: ["src/migrations/*.{ts,js}"],
});
