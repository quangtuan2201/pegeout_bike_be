"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = getAllProducts;
const models_1 = require("../models");
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield models_1.Product.find(); // Lấy tất cả documents từ collection
            console.log(products);
            if (!products)
                res.status(400).json({ message: "Khong co san pham ", errCode: 0 });
            res.status(200).json({
                errCode: 0,
                data: products,
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ message: "Error fetching products", error });
        }
    });
}
