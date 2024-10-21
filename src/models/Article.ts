import mongoose, { Schema, Document } from "mongoose";
interface IArticle extends Document {
  title: string; // Tiêu đề bài viết
  content: string; // Nội dung bài viết
  author: mongoose.Types.ObjectId; // ID của tác giả (tham chiếu đến User)
  tags: string[]; // Mảng các thẻ liên quan
  createdAt: Date; // Ngày tạo
  updatedAt: Date; // Ngày cập nhật
  status: boolean; // Trạng thái bài viết (xuất bản hay không)
  favorites: mongoose.Types.ObjectId[]; // Mảng chứa ID của người dùng yêu thích bài viết
  images: string[]; // Mảng chứa URL hình ảnh liên quan
}
// Tạo schema cho Bicycle
const ArticleSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [{ type: String }], // Hoặc liên kết với Collection Tag nếu cần

    status: {
      type: Boolean,
      default: true,
    },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Mảng chứa ID của User yêu thích
    images: [{ type: String }],
  },
  { timestamps: true }
);

// Export model Product với interface IProduct
const Article = mongoose.model<IArticle>("Article", ArticleSchema);
export default Article;
