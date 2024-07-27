import { Fragment } from 'react';
import { Button } from '@mui/material';
import { RHFTextField } from '@/components/RHFTextField';
import { UsersFields } from '@/features/users/types/schema';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';

export const StudentsForm = () => {
  const { control } = useFormContext<UsersFields>();
  const isTeacher = useWatch({ control, name: 'isTeacher' });

  const { fields, append, remove } = useFieldArray({
    name: 'students',
    control,
  });

  if (!isTeacher) {
    return null;
  }

  return (
    <Fragment>
      <Button type='button' onClick={() => append({ name: '' })}>
        Add new student
      </Button>

      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <RHFTextField label='Name' name={`students.${index}.name`} />
          <Button type='button' color='error' onClick={() => remove(index)}>
            Remove student
          </Button>
        </Fragment>
      ))}
    </Fragment>
  );
};
