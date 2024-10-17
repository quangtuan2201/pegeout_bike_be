import express, { Router } from "express";
import { routes } from "./routes";  // Import danh sách routes

const initWebRoutes = (app: any) => {
  let router = Router();

  // Lặp qua danh sách routes và đăng ký
  routes.forEach(route => {
    const { method, path, handler } = route;

    // Tự động đăng ký route dựa trên phương thức HTTP
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
  });

  return app.use("/", router);  // Sử dụng router đã cấu hình
};

export default initWebRoutes;
