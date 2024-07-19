import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Option } from '@/types/option';
import { Autocomplete, Box, Checkbox, TextField } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options?: Option[];
};

export const RHFAutocomplete = <T extends FieldValues>({
  name,
  label,
  options,
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          multiple
          disableCloseOnSelect
          options={options || []}
          value={value.map((id: string) =>
            options?.find((item) => item.id === id)
          )}
          onChange={(_, newValue) => onChange(newValue.map((item) => item.id))}
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          getOptionLabel={(option) =>
            options?.find((item) => item.id === option.id)?.label ?? ''
          }
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={label}
              inputRef={ref}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <Box component='li' {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  );
};
