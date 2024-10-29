"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const controllers_1 = require("../controllers");
const authMiddleware_1 = require("../middlewares.ts/authMiddleware");
const routes = {
    GET: [
        {
            path: "/",
            handler: (req, res) => {
                res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
            },
            middleware: [(0, authMiddleware_1.authenticate)(["PUBLIC" /* Roles.PUBLIC */])], // Mở công khai
        },
        {
            path: "/home",
            handler: controllers_1.getAllProducts,
            middleware: [(0, authMiddleware_1.authenticate)(["USER" /* Roles.USER */, "ADMIN" /* Roles.ADMIN */])], // Chỉ cho USER và ADMIN
        },
    ],
    POST: [
        {
            path: "/login",
            handler: (req, res) => {
                res.send("Login");
            },
            middleware: [(0, authMiddleware_1.authenticate)(["PUBLIC" /* Roles.PUBLIC */])], // Công khai
        },
        {
            path: "/create-item",
            handler: (req, res) => {
                res.send("Tạo mới item");
            },
            middleware: [(0, authMiddleware_1.authenticate)(["ADMIN" /* Roles.ADMIN */])], // Chỉ dành cho ADMIN
        },
    ],
    PUT: [
        {
            path: "/update-item/:id",
            handler: (req, res) => {
                const { id } = req.params;
                res.send(`Cập nhật item với id: ${id}`);
            },
            middleware: [(0, authMiddleware_1.authenticate)(["ADMIN" /* Roles.ADMIN */])],
        },
    ],
    DELETE: [
        {
            path: "/delete-item/:id",
            handler: (req, res) => {
                const { id } = req.params;
                res.send(`Xóa item với id: ${id}`);
            },
            middleware: [(0, authMiddleware_1.authenticate)(["ADMIN" /* Roles.ADMIN */])],
        },
    ],
};
// Hàm đăng ký các tuyến đường với middleware
const registerRoutes = (app) => {
    Object.keys(routes).forEach((method) => {
        routes[method].forEach((route) => {
            if (route.middleware) {
                app[method.toLowerCase()](route.path, ...route.middleware, route.handler);
            }
            else {
                app[method.toLowerCase()](route.path, route.handler);
            }
        });
    });
};
exports.registerRoutes = registerRoutes;
