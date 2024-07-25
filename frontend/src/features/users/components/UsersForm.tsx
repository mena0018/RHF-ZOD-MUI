import { Container, Stack } from '@mui/material';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { UsersFields } from '@/features/users/types/schema';
import { RHFCheckbox } from '@/components/RHFCheckbox';
import { RHFTextField } from '@/components/RHFTextField';
import { RHFRadioGroup } from '@/components/RHFRadioGroup';
import { RHFAutocomplete } from '@/components/RHFAutocomplete';
import { RHFToggleButtonGroup } from '@/components/RHFToggleButtonGroup';
import {
  useStates,
  useGenders,
  useLanguages,
  useSkills,
} from '@/features/users/services/queries';

export const UsersForm = () => {
  const { data: states } = useStates();
  const { data: genders } = useGenders();
  const { data: languages } = useLanguages();
  const { data: skills } = useSkills();

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
        <RHFRadioGroup<UsersFields>
          name='gender'
          label='Gender'
          options={genders}
        />
        <RHFCheckbox<UsersFields>
          name='skills'
          label='Skills'
          options={skills}
        />
      </Stack>
    </Container>
  );
};
