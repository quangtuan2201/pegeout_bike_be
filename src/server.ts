// import initWebRoutes from "./routes/routes";
import { registerRoutes } from "./routes/registerRoutes";
import express from "express";
import connect from "./config/connectDB";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = process.env.PORT || 2201;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Để xử lý dữ liệu URL-encoded

registerRoutes(app);
connect();
app.listen(port, () => {
  console.log(`_____Server is running on http://localhost:${port}_____`);
});
