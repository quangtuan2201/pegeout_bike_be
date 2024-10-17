"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
        },
    },
    {
        method: 'GET',
        path: '/home',
        handler: (req, res) => {
            res.send("Trang chủ");
        },
    },
    {
        method: 'POST',
        path: '/create-item',
        handler: (req, res) => {
            res.send("Tạo mới item");
        },
    },
    {
        method: 'PUT',
        path: '/update-item/:id',
        handler: (req, res) => {
            const { id } = req.params;
            res.send(`Cập nhật item với id: ${id}`);
        },
    },
    {
        method: 'DELETE',
        path: '/delete-item/:id',
        handler: (req, res) => {
            const { id } = req.params;
            res.send(`Xóa item với id: ${id}`);
        },
    }
];
