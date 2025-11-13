import { pool } from "../db";
import { Request, Response } from "express";
import { randomUUID } from "crypto";

export const getTasks = async (_req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
  res.json(result.rows);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const id = randomUUID();
  const result = await pool.query(
    `INSERT INTO tasks (id, title, description)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [id, title, description]
  );
  res.status(201).json(result.rows[0]);
};
