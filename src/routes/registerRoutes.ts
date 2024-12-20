import { Request, Response, Application, NextFunction } from "express";
import { getAllProducts } from "../controllers";
import { authenticate, authorize, apiLogger } from "../middlewares.ts/index";
import { Roles } from "../utils";

interface Route {
  path: string;
  handler: (req: Request, res: Response) => void;
  middleware?: Array<
    (req: Request, res: Response, next: NextFunction) => void
  > | null;
}

interface RouteMap {
  GET: Route[];
  POST: Route[];
  PUT: Route[];
  DELETE: Route[];
}

const routes: RouteMap = {
  GET: [
    {
      path: "/",
      handler: (req: Request, res: Response) => {
        res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
      },
      middleware: null, // Mở công khai
    },
    {
      path: "/home",
      handler: getAllProducts,
      middleware: [authenticate], // Chỉ cho USER và ADMIN
    },
  ],
  POST: [
    {
      path: "/login",
      handler: (req: Request, res: Response) => {
        res.send("Login");
      },
      middleware: null, // Công khai
    },
    {
      path: "/create-item",
      handler: (req: Request, res: Response) => {
        res.send("Tạo mới item");
      },
      middleware: [authenticate, authorize([Roles.ADMIN])], // Chỉ dành cho ADMIN
    },
  ],
  PUT: [
    {
      path: "/update-item/:id",
      handler: (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`Cập nhật item với id: ${id}`);
      },
      middleware: [authenticate, authorize([Roles.ADMIN])],
    },
  ],
  DELETE: [
    {
      path: "/delete-item/:id",
      handler: (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`Xóa item với id: ${id}`);
      },
      middleware: [authenticate, authorize([Roles.ADMIN])],
    },
  ],
};

// Hàm đăng ký các tuyến đường với middleware
export const registerRoutes = (app: Application) => {
  Object.keys(routes).forEach((method) => {
    routes[method as keyof RouteMap].forEach((route) => {
      if (route.middleware) {
        app[method.toLowerCase() as keyof Application](
          route.path,
          ...route.middleware,
          route.handler
        );
        // Cập nhật hoặc thêm API vào DB
        apiLogger({ method, path: route.path } as Request, {} as Response, () => {});
      } else {
        app[method.toLowerCase() as keyof Application](
          route.path,
          route.handler
        );
        // Cập nhật hoặc thêm API vào DB
        apiLogger({ method , path: route.path } as Request, {} as Response, () => {});
      }
    });
  });
};
