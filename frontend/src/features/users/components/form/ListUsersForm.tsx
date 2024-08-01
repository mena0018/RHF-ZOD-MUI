import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { UsersFields } from '@/features/users/types/schema';
import { useUserDetails, useUsers } from '@/features/users/services/queries';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListSubheader,
} from '@mui/material';

export const ListUsersForm = () => {
  const { control, setValue, reset } = useFormContext<UsersFields>();
  const { data: users } = useUsers();
  const id = useWatch({ control, name: 'id' });
  const { data: userDetails } = useUserDetails(id);

  useEffect(() => {
    if (userDetails) {
      reset(userDetails);
    }
  }, [reset, userDetails]);

  return (
    <List subheader={<ListSubheader>Users</ListSubheader>}>
      {users?.map((user) => (
        <ListItem disablePadding key={user.id}>
          <ListItemButton
            selected={id === user.id}
            onClick={() => setValue('id', user.id)}
          >
            <ListItemText primary={user.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
