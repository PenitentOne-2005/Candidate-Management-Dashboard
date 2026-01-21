import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Candidate } from "./entities/Candidate";
import { Skill } from "./entities/Skill";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Candidate, Skill],
});
