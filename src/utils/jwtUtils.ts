import * as jwt from "jsonwebtoken";
import { Roles } from "./constant";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

if (!JWT_SECRET_KEY) {
  throw new Error(
    "JWT_SECRET_KEY is not defined in the environment variables."
  );
}

export interface JwtPayload {
  userId: string;
  role: Roles;
  exp: number;
  username?: string;
  email?: string;
  phone?: string;
}

export const generateToken = (
  userId: string,
  role: Roles,
  exp: number,
  username?: string,
  email?: string,
  phone?: string
): string => {
  return jwt.sign(
    { userId, role, exp, username, email, phone },
    JWT_SECRET_KEY,
    { expiresIn: "720h" }
  );
};
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
  } catch (error) {
    console.error(`ERROR ${error}`);
    return null;
  }
};
