import { Button, Container, Stack } from '@mui/material';
import { FieldsForm } from '@/features/users/components/form/FieldsForm';
import { SubmitHandler, useFormContext, useWatch } from 'react-hook-form';
import { StudentsForm } from '@/features/users/components/form/StudentsForm';
import { ListUsersForm } from '@/features/users/components/form/ListUsersForm';
import { userDefaultValues, UsersFields } from '@/features/users/types/schema';
import {
  useEditUser,
  useCreateUser,
} from '@/features/users/services/mutations';

export const UsersForm = () => {
  const { control, reset, handleSubmit } = useFormContext<UsersFields>();
  const variant = useWatch({ control, name: 'variant' });

  const editUserMutation = useEditUser();
  const createUserMutation = useCreateUser();

  const onSubmit: SubmitHandler<UsersFields> = (data) => {
    if (variant === 'create') {
      createUserMutation.mutate(data);
    } else {
      editUserMutation.mutate(data);
    }
  };

  return (
    <Container
      maxWidth='sm'
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: '2rem', display: 'flex', gap: 2 }}
    >
      <ListUsersForm />

      <Stack gap={3}>
        <FieldsForm />
        <StudentsForm />
        <Stack flexDirection='row' gap={2} justifyContent='flex-end'>
          <Button onClick={() => reset(userDefaultValues)}>Reset</Button>
          <Button variant='contained' type='submit'>
            {variant === 'create' ? 'Add user' : 'Edit user'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
