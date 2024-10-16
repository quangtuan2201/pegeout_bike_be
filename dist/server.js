"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = __importDefault(require("./routes/route"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = process.env.PORT || 2201;
app.use(express_1.default.json());
(0, route_1.default)(app);
app.listen(port, () => {
    console.log(`_____Server is running on http://localhost:${port}_____`);
});
