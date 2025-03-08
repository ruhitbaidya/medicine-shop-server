"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/config");
const DBConnection = async () => {
    try {
        await mongoose_1.default.connect(config_1.config.db_url);
        console.log("Database Is Connect Successfully");
        app_1.default.listen(config_1.config.port || 7000, () => {
            console.log(`Your Server Is Connected on Port ${config_1.config.port} 🚀`);
        });
    }
    catch (err) {
        console.error(`Failed To Connect Database ${err}`);
        process.exit(1);
    }
};
DBConnection();
