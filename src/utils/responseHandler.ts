// src/utils/ResponseHandler.ts
import { Response } from "express";
import {
  srvErrRes,
  succRes,
  cliErrRes,
} from "./index";

type ResponseData = {
  success: boolean;
  message: string;
  data: unknown;
  total?: number; // total là thuộc tính tùy chọn
};

class ResponseHandler {
  // Phản hồi thành công (đơn giản hóa việc gọi)
  static success(
    res: Response,
    data: unknown = null,
    message: string = succRes.DEFAULT.message,
    options: {
      includeTotal?: boolean; // Tham số để quyết định có bao gồm total hay không
      total?: number; // Tổng số bản ghi, mặc định là 0
    } = {}
  ) {
    const { includeTotal = false, total = 0 } = options; // Giải nén các tham số từ options

    const response: ResponseData = {
      success: true,
      message,
      data,
    };

    // Nếu includeTotal là true, thêm total vào phản hồi
    if (includeTotal) {
      response.total = total;
    }

    return res.status(succRes.DEFAULT.status).json(response);
  }

  // Phản hồi lỗi chung
  static error(
    res: Response,
    statusCode: number = 500,
    message: string = srvErrRes.SERVER_ERROR.message,
    data : unknown = null
  ) {
    return res.status(statusCode).json({
      success: false,
      message,
      data,
    });
  }

  // Các phản hồi lỗi nhanh
  static forbidden(
    res: Response,
    message: string = cliErrRes.FORBIDDEN.message
  ) {
    return this.error(res, cliErrRes.FORBIDDEN.status, message, null);
  }

  static notFound(
    res: Response,
    message: string = cliErrRes.NOT_FOUND.message
  ) {
    return this.error(res, cliErrRes.NOT_FOUND.status, message, null);
  }

  // Tạo phản hồi tùy chỉnh
  static customResponse(
    res: Response,
    statusCode: number,
    message: string,
    data: unknown = null
  ) {
    return res.status(statusCode).json({
      success: statusCode < 400,
      message,
      data,
    });
  }
}

export default ResponseHandler;
