import { Option } from '@/types/option';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options?: Option[];
};

export const RHFRadioGroup = <T extends FieldValues>({
  name,
  label,
  options,
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={Boolean(error)}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                label={option.label}
                control={<Radio checked={field.value === option.id} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
