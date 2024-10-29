"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const index_1 = require("../utils/index");
const authenticate = (allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split("")[1];
        if (!token) {
            return res.status(401).json({
                message: "Authentication token required.",
            });
        }
        const decoded = (0, index_1.verifyToken)(token);
        if (!decoded) {
            return res.status(403).json({
                message: "Invalid or expired token.",
            });
        }
        if (!allowedRoles.includes(decoded.role)) {
            return res.status(403).json({
                message: "Access denied.",
            });
        }
        next();
    };
};
exports.authenticate = authenticate;
