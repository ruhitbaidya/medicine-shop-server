import mongoose from "mongoose";
import app from "./app";
import { config } from "./config/config";

const DBConnection = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    console.log("Database Is Connect Successfully");
    app.listen(config.port || 7000, () => {
      console.log(`Your Server Is Connected on Port ${config.port} 🚀`);
    });
  } catch (err) {
    console.error(`Failed To Connect Database ${err}`);
    process.exit(1);
  }
};

DBConnection();
