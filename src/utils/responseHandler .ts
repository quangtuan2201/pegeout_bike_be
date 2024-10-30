// src/utils/ResponseHandler.ts
import { Response } from "express";
import {serverErrResponses,successResponses,clientErrResponses} from "./index"

type ResponseData = {
  success: boolean;
  message: string;
  data: unknown;
  errCode: number;
  total?: number; // total là thuộc tính tùy chọn
};

class ResponseHandler {
  // Phản hồi thành công (đơn giản hóa việc gọi)
  static success(
    res: Response,
    data: unknown = null,
    message: string = successResponses.DEFAULT.message,
    options: {
      errCode?: number; // Thêm errCode
      includeTotal?: boolean; // Tham số để quyết định có bao gồm total hay không
      total?: number; // Tổng số bản ghi, mặc định là 0
    } = {}
  ) {
    const { errCode = 0, includeTotal = false, total = 0 } = options; // Giải nén các tham số từ options

    const response: ResponseData = {
      success: true,
      message,
      data,
      errCode, // Thêm errCode vào phản hồi
    };

    // Nếu includeTotal là true, thêm total vào phản hồi
    if (includeTotal) {
      response.total = total;
    }

    return res.status(successResponses.DEFAULT.status).json(response);
  }

  // Phản hồi lỗi chung
  static error(
    res: Response,
    statusCode: number = 500,
    message: string = serverErrResponses.SERVER_ERROR.message,
    data: unknown = null,
    errCode: number = 1 // Thêm errCode cho lỗi chung
  ) {
    return res.status(statusCode).json({
      success: false,
      message,
      data,
      errCode, // Thêm errCode vào phản hồi
    });
  }

  // Các phản hồi lỗi nhanh
  static forbidden(
    res: Response,
    message: string = clientErrResponses.FORBIDDEN.message,
    errCode: number = 4 // Thêm errCode cho lỗi 403
  ) {
    return this.error(res, clientErrResponses.FORBIDDEN.status, message, null, errCode);
  }

  static notFound(
    res: Response,
    message: string = clientErrResponses.NOT_FOUND.message,
    errCode: number = 2 // Thêm errCode cho lỗi 404
  ) {
    return this.error(res, clientErrResponses.NOT_FOUND.status, message, null, errCode);
  }

  // Tạo phản hồi tùy chỉnh
  static customResponse(
    res: Response,
    statusCode: number,
    message: string,
    data: unknown = null,
    errCode: number = statusCode >= 400 ? 1 : 0 // Thiết lập errCode tùy thuộc vào statusCode
  ) {
    return res.status(statusCode).json({
      success: statusCode < 400,
      message,
      data,
      errCode, // Thêm errCode vào phản hồi
    });
  }
}

export default ResponseHandler;
