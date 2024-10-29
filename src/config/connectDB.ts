// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const mongoAliasURI: string = process.env.MONGO_ATLAS_URI || "";

if (!mongoAliasURI) {
  console.error("MongoDB URI is not defined in the environment variables.");
  process.exit(1); // Thoát chương trình nếu không có URI
}
export default async function connect(): Promise<void> {
  try {
    await mongoose.connect(mongoAliasURI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.log(
      "Failed to connect to MongoDB:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
}
