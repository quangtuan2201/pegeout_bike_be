import mongoose, { Schema, Document } from "mongoose";
interface IBicycle extends Document {
  name: string; // Tên xe đạp
  productionYear: number; // Năm sản xuất
  color: mongoose.Schema.Types.ObjectId; // Màu sắc
  frameType: string; // Loại khung (Nam/Nữ)
  accessories: mongoose.Types.ObjectId; // Mảng ID của phụ kiện
  quantity: number; // Số lượng xe còn lại
  status: boolean; // Trạng thái hiển thị trên website (ẩn/hiện)
  thumbnail?: string; // Ảnh thu nhỏ (có thể không bắt buộc)
  listImage: string[]; // Danh sách link ảnh về xe
  urlVideo?: string[]; // Link video (có thể không bắt buộc)
  price: {
    pre: number; // Giá hiện tại
    new?: number; // Giá mới (có thể không bắt buộc)
  };
  priority: number; // Độ ưu tiên hiển thị
  description: string; // Thông tin về xe
  //
}
// Tạo schema cho Bicycle
const BicycleSchema: Schema = new Schema(
  {
    name: { type: String, require: true },
    productionYear: { type: Number, require: true },
    color: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AllCode",
      required: true,
    },
    frameType: { type: String, require: true },
    accessories: { type: mongoose.Schema.Types.ObjectId, ref: "Accessories" },
    quantity: { type: Number, require: true },
    status: { type: Boolean, default: true },
    thumbnail: { type: String },
    listImage: [{ type: String }],
    urlVideo: [{ type: String }],
    price: {
      pre: { type: Number, require: true },
      new: { type: Number },
    },
    priority: { type: Number, default: 0 }, // Độ ưu tiên, mặc định là 0
    description: { type: String, require: true },
  },
  { timestamps: true }
);
BicycleSchema.index({name:1 });
// Export model Product với interface IProduct
const Bicycle = mongoose.model<IBicycle>("Bicycle", BicycleSchema);
export default Bicycle;
