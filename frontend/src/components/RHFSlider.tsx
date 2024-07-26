import { Slider, Stack, Typography } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label?: string;
}

export function RHFSlider<T extends FieldValues>({ name, label }: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack gap={2}>
          {label ? <Typography>{label}</Typography> : null}
          <Slider valueLabelDisplay='auto' {...field} />
        </Stack>
      )}
    />
  );
}
