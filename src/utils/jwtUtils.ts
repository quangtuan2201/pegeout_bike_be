import * as jwt from "jsonwebtoken";
import { Roles } from "./constant";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '720h' as string

if (!JWT_SECRET_KEY) {
  throw new Error(
    "JWT_SECRET_KEY is not defined in the environment variables."
  );
}

// Giao diện payload của JWT
export interface JwtPayload {
  userId: string;
  role: Roles;
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
    { expiresIn: TOKEN_EXPIRY } // 720 giờ = 30 ngày
  );
};



export const verifyToken = async (token: string): Promise<JwtPayload | null> => {
  try {
    return new Promise((resolve, reject)=> {
      jwt.verify(token, JWT_SECRET_KEY, (err, decode)=> {
        if(err){
          console.error()
          reject(`Token verification failed:${err}`)
        }else{
          resolve(decode as JwtPayload);
        }
      })
    }) 
  } catch (error) {
    console.error(`Token verification failed: ${error}`);
    return null;
  }
};
