import { Container, Stack } from '@mui/material';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { UsersFields } from '@/features/users/types/schema';
import { RHFTextField } from '@/components/RHFTextField';
import { RHFAutocomplete } from '@/components/RHFAutocomplete';
import { RHFToggleButtonGroup } from '@/components/RHFToggleButtonGroup';
import { useStates, useLanguages } from '@/features/users/services/queries';

export const UsersForm = () => {
  const { data: states } = useStates();
  const { data: languages } = useLanguages();

  const { handleSubmit } = useFormContext<UsersFields>();
  const onSubmit: SubmitHandler<UsersFields> = (data) => console.log(data);

  return (
    <Container
      maxWidth='sm'
      component='form'
      sx={{ padding: '2rem' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap={2}>
        <RHFTextField name='name' label='Name' />
        <RHFTextField name='email' label='Email' />
        <RHFAutocomplete<UsersFields>
          name='states'
          label='States'
          options={states}
        />
        <RHFToggleButtonGroup<UsersFields>
          name='languagesSpoken'
          options={languages}
        />
      </Stack>
    </Container>
  );
};
