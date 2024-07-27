import { Container } from '@mui/material';
import { UsersFields } from '@/features/users/types/schema';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { RHFSlider } from '@/components/RHFSlider';
import { RHFSwitch } from '@/components/RHFSwitch';
import { RHFCheckbox } from '@/components/RHFCheckbox';
import { RHFTextField } from '@/components/RHFTextField';
import { RHFRadioGroup } from '@/components/RHFRadioGroup';
import { RHFAutocomplete } from '@/components/RHFAutocomplete';
import { RHFDateTimePicker } from '@/components/RHFDateTimePicker';
import { RHFDateRangePicker } from '@/components/RHFDateRangePicker';
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
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: '2rem', gap: 3, display: 'flex', flexDirection: 'column' }}
    >
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
      <RHFCheckbox<UsersFields> name='skills' label='Skills' options={skills} />
      <RHFDateTimePicker<UsersFields>
        name='registrationDateAndTime'
        label='Registration Date and Time'
      />
      <RHFDateRangePicker<UsersFields>
        name='formerEmploymentPeriod'
        label='Former Employment Period'
      />
      <RHFSlider<UsersFields> name='salaryRange' label='Salary Range' />
      <RHFSwitch<UsersFields> name='isTeacher' label='Are you a teacher ?' />
    </Container>
  );
};
