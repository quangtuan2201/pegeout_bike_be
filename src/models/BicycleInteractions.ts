import mongoose, { Schema, Document } from "mongoose";
interface IBicycleInteractions extends Document {
  bicycle: mongoose.Schema.Types.ObjectId; // Tham chiếu tới Bicycle
  viewer: mongoose.Schema.Types.ObjectId; // Tham chiếu tới User
  viewedAt: Date; // Thời gian người xem đã xem
  views: number; // Lượt xem
}

// Tạo schema cho ViewStatistics
const BicycleInteractionsSchema: Schema = new Schema(
  {
    bicycle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bicycle",
      required: true,
    },
    viewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    viewedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Thêm timestamps để tự động tạo createdAt và updatedAt
);
// Export model Product với interface IViewStatistics
const BicycleInteractions = mongoose.model<IBicycleInteractions>(
  "BicycleInteractions",
  BicycleInteractionsSchema
);
export default BicycleInteractions;
