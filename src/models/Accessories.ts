import mongoose, { Schema, Document } from "mongoose";
interface IAccessories extends Document {
  name: string; // Tên phụ kiện
  description?: string; // Mô tả phụ kiện
}

// Tạo schema cho Product
const AccessoriesSchema: Schema = new Schema(
  { name: { type: String, required: true }, description: { type: String } },
  { timestamps: true } //Thêm timestamps để tự động tạo createAt và updateAt
);

// Export model Product với interface IProduct
const Accessories = mongoose.model<IAccessories>(
  "Accessories",
  AccessoriesSchema
);
export default Accessories;
