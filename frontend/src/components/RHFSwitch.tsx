import { FormControlLabel, Switch } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export function RHFSwitch<T extends FieldValues>({ name, label }: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          control={<Switch {...field} checked={field.value} />}
        />
      )}
    />
  );
}
