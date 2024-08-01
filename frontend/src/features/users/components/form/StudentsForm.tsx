import DeleteRounded from '@mui/icons-material/DeleteRounded';
import { Fragment, useEffect } from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import { RHFTextField } from '@/components/RHFTextField';
import { UsersFields } from '@/features/users/types/schema';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';

export const StudentsForm = () => {
  const { control, unregister } = useFormContext<UsersFields>();
  const isTeacher = useWatch({ control, name: 'isTeacher' });

  const { fields, append, remove, replace } = useFieldArray({
    name: 'students',
    control,
  });

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
      unregister('students');
    }
  }, [isTeacher, replace, unregister]);

  if (!isTeacher) {
    return null;
  }

  return (
    <Fragment>
      <Button type='button' onClick={() => append({ name: '' })}>
        Add new student
      </Button>

      {fields.map((field, index) => (
        <Stack key={field.id} direction='row' gap={1}>
          <RHFTextField
            fullWidth
            label='Name'
            name={`students.${index}.name`}
          />
          <IconButton
            onClick={() => remove(index)}
            sx={{ width: 55, height: 55 }}
          >
            <DeleteRounded />
          </IconButton>
        </Stack>
      ))}
    </Fragment>
  );
};
