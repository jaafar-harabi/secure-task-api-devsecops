import { Request, Response } from "express";
import { Task } from "../models/task";
import { randomUUID } from "crypto";

let tasks: Task[] = [];

export const getTasks = (_req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};

export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  const now = new Date();
  const task: Task = {
    id: randomUUID(),
    title,
    description,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };
  tasks.push(task);
  res.status(201).json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, description, status } = req.body;
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  task.updatedAt = new Date();

  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks.splice(index, 1);
  res.status(204).send();
};
