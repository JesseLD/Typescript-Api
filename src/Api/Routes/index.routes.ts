import { Router, Request, Response } from "express";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World" });
});

routes.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found", status: 404 });
});
