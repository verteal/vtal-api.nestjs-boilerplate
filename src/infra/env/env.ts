import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PORT: z.number().min(4).max(4),
});

export type Env = z.infer<typeof envSchema>;
