import initWebRoutes from "./routes/route";
import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 2201;
app.use(express.json());

initWebRoutes(app);

app.listen(port, () => {
  console.log(`_____Server is running on http://localhost:${port}_____`);
});
