"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Tạo schema cho Bicycle
const BicycleSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    productionYear: { type: Number, require: true },
    // frameType: { type: String, require: true },
    quantity: { type: Number, require: true },
    status: { type: Boolean, default: true },
    thumbnail: { type: String },
    listImage: [{ type: String }],
    urlVideo: [{ type: String }],
    price: {
        pre: { type: Number, require: true },
        new: { type: Number },
    },
    views: { type: Number, default: 0 }, // Lưu số lượt xem
    color: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "AllCode",
        required: true,
    },
    accessories: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Accessories" }],
    category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "AllCode" }, // Tham chiếu tới AllCode
    priority: { type: Number, default: 0 }, // Độ ưu tiên, mặc định là 0
    description: { type: String, require: true },
}, { timestamps: true });
BicycleSchema.index({ name: 1 });
// Export model Product với interface IProduct
const Bicycle = mongoose_1.default.model("Bicycle", BicycleSchema);
exports.default = Bicycle;
