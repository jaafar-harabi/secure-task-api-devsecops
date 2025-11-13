import express from "express";
import helmet from "helmet";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import { apiRateLimiter } from "./security/rateLimit";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000"], 
  })
);
app.use(express.json());
app.use(apiRateLimiter);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/tasks", tasksRouter);

// error handler last
app.use(errorHandler);

export default app;
