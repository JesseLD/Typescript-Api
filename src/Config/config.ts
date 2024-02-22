import dotenv from "dotenv";
dotenv.config();

/**
 * Configuration object for the application. Using dotenv lib to load environment variables.
 * 
 */
export const config = {
  port: process.env.PORT || 3000,
  apiUrl: process.env.API_URL || "http://localhost:3000",
};
