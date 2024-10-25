// src/responseHandler.ts
import { Response } from 'express';

interface SuccessResponse<T> {
  status: string;
  data?: T;
  message?: string;
}

interface ErrorResponse {
  status: string;
  message: string;
}

// Hàm chung để trả về phản hồi thành công
export const sendSuccessResponse = <T>(res: Response, data: T, message: string = 'Thành công') => {
  const response: SuccessResponse<T> = {
    status: 'success',
    data,
    message,
  };
  return res.status(200).json(response);
};

// Hàm chung để trả về phản hồi lỗi
export const sendErrorResponse = (res: Response, message: string, statusCode: number = 400) => {
  const response: ErrorResponse = {
    status: 'error',
    message,
  };
  return res.status(statusCode).json(response);
};
