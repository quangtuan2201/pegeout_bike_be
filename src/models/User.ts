import mongoose, { Schema, Document } from "mongoose";
interface IUser extends Document {
  username: string;
  password: string;
  fullName: string;
  gender: mongoose.Types.ObjectId;
  avatar?: string;
  email: string;
  phone: string;
  role: mongoose.Types.ObjectId;
  favorites: mongoose.Types.ObjectId[];
}

// Tạo schema cho Product
const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    gender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AllCode",
      required: true,
    },
    avatar: { type: String },
    email: { type: String },
    phone: { type: String, required: true },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AllCode",
      required: true,
    },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bicycle" }],
    appointmentDate : { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  },
  { timestamps: true } //Thêm timestamps để tự động tạo createAt và updateAt
);
UserSchema.index({ username: 1, email:1}, { unique: true });
UserSchema.index({fullName:1 });
// Export model Product với interface IProduct
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
