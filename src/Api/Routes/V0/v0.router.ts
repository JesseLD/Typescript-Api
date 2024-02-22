import { Router, Request, Response } from "express";
import { userRoutes } from "./User/user.routes";

export const v0Router = Router();


/**
 * V0 Default route
 */
v0Router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World" });
});

/**
 * Redirect to user router to access all methods
 */
v0Router.use("/Users", userRoutes);
