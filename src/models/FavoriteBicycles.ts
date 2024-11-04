import mongoose, { Schema, Document } from "mongoose";

interface IFavoriteBicycles extends Document {
  user: mongoose.Types.ObjectId;
  bicycle: mongoose.Types.ObjectId;
  favoritedAt: Date;
}

const FavoriteBicyclesSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bicycle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bicycle",
      required: true,
    },
    favoritedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Index giúp tăng hiệu suất khi truy vấn với `user` và `bicycle`
FavoriteBicyclesSchema.index({ user: 1, bicycle: 1 }, { unique: true });

const FavoriteBicycles = mongoose.model<IFavoriteBicycles>(
  "FavoriteBicycles",
  FavoriteBicyclesSchema
);
export default FavoriteBicycles;
