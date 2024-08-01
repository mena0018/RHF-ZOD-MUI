import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, editUser, USERS_KEY } from '@/features/users/services/api';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
    },
  });
};
