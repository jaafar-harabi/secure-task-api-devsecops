import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface AuthRequest extends Request {
  user?: { id: string };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }
  const token = header.substring("Bearer ".length);
  try {
    const payload = jwt.verify(token, env.jwtSecret) as { id: string };
    req.user = { id: payload.id };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
