import express, { Request, Response } from "express";
let router = express.Router();

let initWebRoutes = (app: any) => {
  router.get("/", (req: Request, res: Response) => {
    res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout !");
  });
  router.get("/home", (req: Request, res: Response) => {
    res.send("Trang chủ");
  });
  return app.use("/", router);
};
export default initWebRoutes;
