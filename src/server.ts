// import initWebRoutes from "./routes/routes";
import initWebRoutes from "./routes/initWebRoutes";
import express from "express";
import connect from "./config/connectDB";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 2201;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Để xử lý dữ liệu URL-encoded

initWebRoutes(app);
connect();
app.listen(port, () => {
  console.log(`_____Server is running on http://localhost:${port}_____`);
});
