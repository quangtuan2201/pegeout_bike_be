import { Request, Response, NextFunction } from "express";
import ResponseHandler, { Roles, cliErrRes } from "../utils/index";

export const authorize = (allowedRoles: Roles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    // Kiểm tra vai trò người dùng
    if (!allowedRoles.includes(user.role)) {
      return ResponseHandler.error(
        res,
        cliErrRes.FORBIDDEN.status,
        cliErrRes.FORBIDDEN.message
      );
    }

    // Nếu tất cả điều kiện đều hợp lệ, cho phép tiếp tục
    next();
  };
};
