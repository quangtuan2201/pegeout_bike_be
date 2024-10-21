"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import initWebRoutes from "./routes/routes";
const registerRoutes_1 = require("./routes/registerRoutes");
const express_1 = __importDefault(require("express"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = process.env.PORT || 2201;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); // Để xử lý dữ liệu URL-encoded
(0, registerRoutes_1.registerRoutes)(app);
(0, connectDB_1.default)();
app.listen(port, () => {
    console.log(`_____Server is running on http://localhost:${port}_____`);
});
