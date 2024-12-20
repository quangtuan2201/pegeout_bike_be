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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connect;
// const mongoose = require("mongoose");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoAliasURI = process.env.MONGO_ATLAS_URI || "";
if (!mongoAliasURI) {
    console.error("MongoDB URI is not defined in the environment variables.");
    process.exit(1); // Thoát chương trình nếu không có URI
}
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(mongoAliasURI);
            console.log("Connected to MongoDB successfully!");
        }
        catch (error) {
            console.log("Failed to connect to MongoDB:", error instanceof Error ? error.message : error);
            process.exit(1);
        }
    });
}
