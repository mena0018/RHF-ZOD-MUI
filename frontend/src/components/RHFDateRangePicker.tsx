import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFDateRangePicker<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...props } }) => (
        <DateRangePicker
          {...props}
          value={Array.isArray(value) ? value : [null, null]}
        />
      )}
    />
  );
}
