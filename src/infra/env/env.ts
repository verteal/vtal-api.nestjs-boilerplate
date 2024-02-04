import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PORT: z.coerce.number(),
  RABBITMQ_URI: z.string(),
})

export type Env = z.infer<typeof envSchema>
