// import mongoose from "mongoose";
import app from "./app";
import { config } from "./config/config";

const DBConnection = async () => {
  // await mongoose.connect(config.db_url as string);
  app.listen(config.port || 7000, () => {
    console.log(`Your Server Is Connected on Port ${config.port}`);
  });
};

DBConnection();
