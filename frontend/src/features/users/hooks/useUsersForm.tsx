import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UsersFields,
  UsersSchema,
  userDefaultValues,
} from '@/features/users/types/schema';

export function useUsersForm() {
  const methods = useForm<UsersFields>({
    resolver: zodResolver(UsersSchema),
    mode: 'onChange',
    defaultValues: userDefaultValues,
  });

  return methods;
}
