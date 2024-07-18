import { DevTool } from '@hookform/devtools';
import { FormProvider } from 'react-hook-form';
import { UsersForm } from '@/features/users/components/UsersForm';
import { useUsersForm } from '@/features/users/hooks/useUsersForm';

export const UsersProvider = () => {
  const methods = useUsersForm();

  return (
    <FormProvider {...methods}>
      <DevTool control={methods.control} />
      <UsersForm />
    </FormProvider>
  );
};
