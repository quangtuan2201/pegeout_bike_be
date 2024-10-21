import { Request, Response, Application } from "express";
import { getAllProducts } from "../controllers";

// Định nghĩa giao diện cho một tuyến đường
interface Route {
  path: string;
  handler: (req: Request, res: Response) => void;
}

// Cấu trúc cho các phương thức HTTP
interface RouteMap {
  GET: Route[];
  POST: Route[];
  PUT: Route[];
  DELETE: Route[];
}

// Khởi tạo hashmap chứa các tuyến đường
const routes: RouteMap = {
  GET: [
    {
      path: "/",
      handler: (req: Request, res: Response) => {
        res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
      },
    },
    {
      path: "/home",
      handler: getAllProducts,
    },
  ],
  POST: [
    {
      path: "/login",
      handler: (req: Request, res: Response) => {
        res.send("Login");
      },
    },
    {
      path: "/create-item",
      handler: (req: Request, res: Response) => {
        res.send("Tạo mới item");
      },
    },
  ],
  PUT: [
    {
      path: "/update-item/:id",
      handler: (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`Cập nhật item với id: ${id}`);
      },
    },
  ],
  DELETE: [
    {
      path: "/delete-item/:id",
      handler: (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`Xóa item với id: ${id}`);
      },
    },
  ],
};

// Hàm đăng ký các tuyến đường một cách động
export const registerRoutes = (app: Application) => {
  Object.keys(routes).forEach((method) => {
    routes[method as keyof RouteMap].forEach((route) => {
      app[method.toLowerCase() as keyof Application](route.path, route.handler);
    });
  });
};
