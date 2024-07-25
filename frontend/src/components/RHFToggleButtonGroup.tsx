import { Option } from '@/types/option';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
};

export const RHFToggleButtonGroup = <T extends FieldValues>({
  name,
  options,
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...props } }) => (
        <ToggleButtonGroup
          {...props}
          onChange={(_, newValue) => {
            if (newValue.length) {
              onChange(newValue);
            }
          }}
          value={value.length > 0 ? value : [options?.[0].id]}
        >
          {options?.map((option) => (
            <ToggleButton key={option.id} value={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};
