import { Request, Response, NextFunction } from "express";
import ResponseHandler, { verifyToken, cliErrRes } from "../utils/index";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Kiểm tra xem header có chứa token hay không
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return ResponseHandler.error(
      res,
      cliErrRes.FORBIDDEN.status,
      cliErrRes.FORBIDDEN.message
    );
  }

  // Lấy token từ header
  const token = authHeader && authHeader.split(" ")[1];

  // Kiểm tra và giải mã token
  if (!token) {
    return ResponseHandler.error(
      res,
      cliErrRes.UNAUTHORIZED.status,
      cliErrRes.UNAUTHORIZED.message
    );
  }

  try {
    const decoded = await verifyToken(token);
    if (!decoded || !decoded.role) {
      return ResponseHandler.error(
        res,
        cliErrRes.VERIFY.status,
        cliErrRes.VERIFY.message
      );
    }
    req.user = decoded; // Lưu thông tin user vào req.user
    // Nếu tất cả điều kiện đều hợp lệ, cho phép tiếp tục
    next();
  } catch (error) {
    console.error(`Invalod token ${error}`);
    res.status(403).json({ message: "Invalid token" });
  }
};
