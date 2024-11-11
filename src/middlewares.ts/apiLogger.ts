import { Request, Response, NextFunction } from "express";
import {Route} from "../models/index";

export const apiLogger = async (req: Request, res: Response, next: NextFunction) => {
  const { method, path } = req;
   // Chuyển method về chữ hoa trước khi lưu vào DB
   const methodUpper = method.toUpperCase();
  try {
    // Kiểm tra xem API có tồn tại trong DB không
    const existingApi = await Route.findOne({ methodUpper, path });

    if (!existingApi) {
      // Nếu API chưa tồn tại, thêm mới vào DB
      await Route.create({ methodUpper, path, description: "Tự động ghi lại" });
    } else {
      // Nếu API đã tồn tại và có sự thay đổi, cập nhật lại thông tin
      await Route.updateOne(
        { method, path },
        { $set: { methodUpper, path, description: "Cập nhật tự động" } }
      );
    }
  } catch (error) {
    console.error("Lỗi khi ghi lại API:", error);
  }
  next();
};

