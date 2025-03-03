import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  salt: process.env.SALT_ROUND,
  tokenSecrate: process.env.TOKEN_SECRATE,
};
