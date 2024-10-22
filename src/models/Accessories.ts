import mongoose, { Schema, Document } from "mongoose";
interface IAccessories extends Document {
  name: string;
  type: mongoose.Schema.Types.ObjectId; // Tham chiếu tới AllCode
  description: string;
  compatibility: string[]; // Các dòng xe tương thích
}

// Tạo schema cho Product
const AccessoriesSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AllCode",
      required: true,
    },
    description: { type: String, required: true },
    compatibility: [{ type: String }],
  },
  { timestamps: true } //Thêm timestamps để tự động tạo createAt và updateAt
);

// Export model Product với interface IProduct
const Accessories = mongoose.model<IAccessories>(
  "Accessories",
  AccessoriesSchema
);
export default Accessories;
