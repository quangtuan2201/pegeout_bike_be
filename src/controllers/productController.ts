import { Request, Response } from "express";
import { Product } from "../models";
async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await Product.find(); // Lấy tất cả documents từ collection
    console.log(products);
    if (!products)
      res.status(400).json({ message: "Khong co san pham ", errCode: 0 });
    res.status(200).json({
      errCode: 0,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products", error });
  }
}

export { getAllProducts };
