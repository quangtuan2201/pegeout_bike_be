import mongoose, { Schema, Document } from "mongoose";

// Định nghĩa interface cho Product
interface IProduct extends Document {
  ten_san_pham: string;
  mau_sac: string;
  loai_khung: string;
  nam_sx: string;
  so_luong: number;
  hinh_anh: string[]; // Mảng các chuỗi cho hình ảnh
  avatar: string;
  ma_xe: string;
  mo_ta: string;
  createAt?: Date;
  updateAt?: Date;
}

// Tạo schema cho Product
const ProductSchema: Schema = new Schema({
  ten_san_pham: { type: String, maxLength: 20 },
  mau_sac: { type: String },
  loai_khung: { type: String },
  nam_sx: { type: String },
  so_luong: { type: Number },
  hinh_anh: { type: [String] }, // Định nghĩa kiểu mảng chuỗi
  avatar: { type: String },
  ma_xe: { type: String },
  mo_ta: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

// Export model Product với interface IProduct
const Product = mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
