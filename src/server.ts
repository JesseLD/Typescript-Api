import app from "./Config/express";
import { config } from "./Config/config";

const server = app.listen(config.port, () => {
  console.log(`> [Server] is running on port: ${config.port}`);
});

export default server;
