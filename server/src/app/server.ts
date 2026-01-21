import express from "express";
import cors from "cors";
import { AppDataSource } from "../data-source";
import router from "../routes/candidates";
import errorHandler from "../middleware/errorHandlers";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/candidates", router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

AppDataSource.initialize()
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
