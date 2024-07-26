import { Stack, Typography } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
};

export function RHFDateRangePicker<T extends FieldValues>({
  name,
  label,
}: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...props } }) => (
        <Stack gap={2}>
          {label ? <Typography>{label}</Typography> : null}
          <DateRangePicker
            {...props}
            value={Array.isArray(value) ? value : [null, null]}
          />
        </Stack>
      )}
    />
  );
}
