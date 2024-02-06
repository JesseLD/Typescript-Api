import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { routes } from "../Api/Routes/index.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(500).json({ error: "Internal Server Error" });
});

app.use(routes);

export default app;
