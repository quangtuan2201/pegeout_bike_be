import mongoose, { Schema, Document } from "mongoose";
interface IAllCode extends Document {
  keyMap: string;
  type: string;
  value: string;
  descriotion: string;
}

// Tạo schema cho Product
const AllCodeSchema: Schema = new Schema(
  {
    keyMap: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true } //Thêm timestamps để tự động tạo createAt và updateAt
);

// Export model Product với interface IProduct
const AllCode = mongoose.model<IAllCode>("AllCode", AllCodeSchema);
export default AllCode;
