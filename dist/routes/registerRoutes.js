"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const controllers_1 = require("../controllers");
// Khởi tạo hashmap chứa các tuyến đường
const routes = {
    GET: [
        {
            path: "/",
            handler: (req, res) => {
                res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
            },
        },
        {
            path: "/home",
            handler: controllers_1.getAllProducts,
        },
    ],
    POST: [
        {
            path: "/login",
            handler: (req, res) => {
                res.send("Login");
            },
        },
        {
            path: "/create-item",
            handler: (req, res) => {
                res.send("Tạo mới item");
            },
        },
    ],
    PUT: [
        {
            path: "/update-item/:id",
            handler: (req, res) => {
                const { id } = req.params;
                res.send(`Cập nhật item với id: ${id}`);
            },
        },
    ],
    DELETE: [
        {
            path: "/delete-item/:id",
            handler: (req, res) => {
                const { id } = req.params;
                res.send(`Xóa item với id: ${id}`);
            },
        },
    ],
};
// Hàm đăng ký các tuyến đường một cách động
const registerRoutes = (app) => {
    Object.keys(routes).forEach((method) => {
        routes[method].forEach((route) => {
            app[method.toLowerCase()](route.path, route.handler);
        });
    });
};
exports.registerRoutes = registerRoutes;
