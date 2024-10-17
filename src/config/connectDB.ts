const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();
const mongoURI: string = process.env.MONGO_URI || "";
if (!mongoURI) {
  console.error("MongoDB URI is not defined in the environment variables.");
  process.exit(1); // Thoát chương trình nếu không có URI
}

export default async function connect(): Promise<void> {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.log(
      "Failed to connect to MongoDB:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
}
