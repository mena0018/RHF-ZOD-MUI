import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createUser,
  editUser,
  USER_KEY,
  USERS_KEY,
} from '@/features/users/services/api';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      toast.success('Created user');
      await queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editUser,
    onSuccess: async (_, data) => {
      toast.success('Edited user');
      await queryClient.invalidateQueries({ queryKey: [USERS_KEY] });

      if (data.variant === 'edit') {
        await queryClient.invalidateQueries({
          queryKey: [USER_KEY, { id: data.id }],
        });
      }
    },
  });
};
