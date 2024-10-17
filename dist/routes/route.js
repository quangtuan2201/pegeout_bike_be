"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
/**
 * Hàm chung để đăng ký route cho từng phương thức HTTP
 * @param {Router} router - Router của Express
 * @param {string} method - Phương thức HTTP (GET, POST, PUT, DELETE)
 * @param {string} path - Đường dẫn của route
 * @param {(req: Request, res: Response) => void} handler - Hàm xử lý request
 */
const addRoute = (router, method, path, handler) => {
    switch (method) {
        case 'GET':
            router.get(path, handler);
            break;
        case 'POST':
            router.post(path, handler);
            break;
        case 'PUT':
            router.put(path, handler);
            break;
        case 'DELETE':
            router.delete(path, handler);
            break;
        default:
            console.log(`Method ${method} is not supported`);
    }
};
// Khởi tạo routes bằng cách sử dụng hàm chung
const initWebRoutes = (app) => {
    addRoute(router, 'GET', "/", (req, res) => {
        res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
    });
    addRoute(router, 'GET', "/home", (req, res) => {
        res.send("Trang chủ");
    });
    addRoute(router, 'POST', "/create-item", (req, res) => {
        res.send("Tạo mới item");
    });
    addRoute(router, 'PUT', "/update-item", (req, res) => {
        res.send("Cập nhật item");
    });
    addRoute(router, 'DELETE', "/delete-item", (req, res) => {
        res.send("Xóa item");
    });
    return app.use("/", router);
};
exports.default = initWebRoutes;
