"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout !");
    });
    router.get("/home", (req, res) => {
        res.send("Trang chủ");
    });
    return app.use("/", router);
};
exports.default = initWebRoutes;
