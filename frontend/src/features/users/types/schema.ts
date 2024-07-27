import { z } from 'zod';

const StudentSchema = z.object({
  name: z.string().min(4),
});

export const UsersSchema = z
  .intersection(
    z.object({
      name: z.string().min(1, { message: 'Name is required' }),
      email: z.string().email({ message: 'Email is invalid' }),
      states: z.array(z.string()).min(1).max(2),
      languagesSpoken: z.array(z.string()),
      gender: z.string().min(1),
      skills: z.array(z.string()).max(2),
      registrationDateAndTime: z.date(),
      formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
      salaryRange: z.array(z.number()).min(2).max(2),
      isTeacher: z.boolean(),
    }),
    z.discriminatedUnion('variant', [
      z.object({
        variant: z.literal('create'),
      }),
      z.object({
        variant: z.literal('edit'),
        id: z.string().min(1),
      }),
    ])
  )
  .and(
    z.union([
      z.object({
        isTeacher: z.literal(true),
        students: z.array(StudentSchema),
      }),
      z.object({
        isTeacher: z.literal(false),
      }),
    ])
  );

export type UsersFields = z.infer<typeof UsersSchema>;

export const userDefaultValues: UsersFields = {
  variant: 'create',
  name: '',
  email: '',
  states: [],
  languagesSpoken: [],
  gender: '',
  skills: [],
  registrationDateAndTime: new Date(),
  formerEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 5000],
  isTeacher: false,
};
