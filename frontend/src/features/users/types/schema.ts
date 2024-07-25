import { z } from 'zod';

export const UsersSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Email is invalid' }),
  states: z.array(z.string()).min(1).max(2),
  languagesSpoken: z.array(z.string()),
});

export type UsersFields = z.infer<typeof UsersSchema>;

export const userDefaultValues: UsersFields = {
  name: '',
  email: '',
  states: [],
  languagesSpoken: [],
};
