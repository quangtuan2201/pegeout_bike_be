import { Request, Response } from "express";
interface Route {
  method: string;
  path: string;
  handler: (req: Request, res: Response) => void;
}
export const routes:Route[] = [
  {
    method: 'GET',
    path: '/',
    handler: (req: Request, res: Response) => {
      res.send("Chào mừng đến với dự án Xe đạp cổ Peugeout!");
    },
  },
  {
    method: 'GET',
    path: '/home',
    handler: (req: Request, res: Response) => {
      res.send("Trang chủ");
    },
  },
  {
    method: 'POST',
    path: '/create-item',
    handler: (req: Request, res: Response) => {
      res.send("Tạo mới item");
    },
  },
  {
    method: 'PUT',
    path: '/update-item/:id',
    handler: (req: Request, res: Response) => {
      const { id } = req.params;
      res.send(`Cập nhật item với id: ${id}`);
    },
  },
  {
    method: 'DELETE',
    path: '/delete-item/:id',
    handler: (req: Request, res: Response) => {
      const { id } = req.params;
      res.send(`Xóa item với id: ${id}`);
    },
  }
];
