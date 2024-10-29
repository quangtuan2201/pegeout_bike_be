import { Request, Response, NextFunction } from "express";
import { Roles, verifyToken } from "../utils/index";

export const authenticate = (allowedRoles: Roles[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split("")[1];
    if (!token) {
      return res.status(401).json({
        message: "Authentication token required.",
      });
    }
    const decoded = verifyToken(token);
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
