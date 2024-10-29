// src/utils/ResponseHandler.ts
import { Response } from "express";

class ResponseHandler {
  // Phản hồi thành công
  static success(res: Response, message: string, data: unknown = null) {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  // Phản hồi lỗi chung
  static error(
    res: Response,
    message: string,
    statusCode: number = 500,
    data: unknown = null
  ) {
    return res.status(statusCode).json({
      success: false,
      message,
      data,
    });
  }

  // Phản hồi lỗi 403
  static forbidden(
    res: Response,
    message: string = "Không có quyền truy cập."
  ) {
    return this.error(res, message, 403);
  }

  // Phản hồi lỗi 404
  static notFound(
    res: Response,
    message: string = "Không tìm thấy tài nguyên."
  ) {
    return this.error(res, message, 404);
  }

  // Phản hồi lỗi tùy chỉnh khác
  static customError(
    res: Response,
    statusCode: number,
    message: string,
    data: unknown = null
  ) {
    return this.error(res, message, statusCode, data);
  }
}

export default ResponseHandler;
