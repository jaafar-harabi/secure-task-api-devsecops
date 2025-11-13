import "dotenv/config";

interface EnvConfig {
  port: number;
  nodeEnv: string;
  dbHost: string;
  dbPort: number;
  dbUser: string;
  dbPassword: string;
  dbName: string;
  jwtSecret: string;
}

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

export const env: EnvConfig = {
  port: Number(getEnv("PORT", "3000")),
  nodeEnv: getEnv("NODE_ENV", "development"),
  dbHost: getEnv("DB_HOST", "localhost"),
  dbPort: Number(getEnv("DB_PORT", "5432")),
  dbUser: getEnv("DB_USER", "app"),
  dbPassword: getEnv("DB_PASSWORD", "app_password"),
  dbName: getEnv("DB_NAME", "tasks_db"),
  jwtSecret: getEnv("JWT_SECRET", "change-me-in-prod"),
};
