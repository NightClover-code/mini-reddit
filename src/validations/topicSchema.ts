import { z } from 'zod';

export const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'Must be lowercase letters or dashes without spaces.',
    }),
  description: z.string().min(10),
});
