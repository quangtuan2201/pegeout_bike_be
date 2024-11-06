// src/@types/express.d.ts

import { JwtPayload } from '../src/utils/index'; // Thay đổi đường dẫn này tới file chứa kiểu JwtPayload của bạn

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;  // Thêm thuộc tính user vào kiểu Request
    }
  }
}