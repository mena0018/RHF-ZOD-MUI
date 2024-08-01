import axios from 'axios';
import omit from 'lodash.omit';

import { Option } from '@/types/option';
import { API_ROUTES } from '@/utils/config';
import { UserGet } from '@/features/users/types/api';
import { UsersFields } from '@/features/users/types/schema';
import {
  userToBodyRequest,
  usersToState,
  userDetailsToState,
} from '@/features/users/utils/transform';

export const USER_KEY = 'user';
export const USERS_KEY = 'users';
export const STATES_KEY = 'states';
export const SKILLS_KEY = 'skills';
export const GENDERS_KEY = 'genders';
export const LANGUAGES_KEY = 'languages';

export const getStates = async () => {
  return axios.get<Option[]>(API_ROUTES.states).then((res) => res.data);
};

export const getLanguages = async () => {
  return axios.get<Option[]>(API_ROUTES.languages).then((res) => res.data);
};

export const getGenders = async () => {
  return axios.get<Option[]>(API_ROUTES.genders).then((res) => res.data);
};

export const getSkills = async () => {
  return axios.get<Option[]>(API_ROUTES.skills).then((res) => res.data);
};

export const getUsers = async () => {
  const { data } = await axios.get<UserGet[]>(API_ROUTES.users);
  return usersToState(data);
};

export const getUserDetails = async (id: string) => {
  const { data } = await axios.get<UserGet>(`${API_ROUTES.users}/${id}`);
  return userDetailsToState(data);
};

export const createUser = async (data: UsersFields) => {
  if (data.variant !== 'create') {
    return;
  }
  return axios.post(API_ROUTES.users, omit(userToBodyRequest(data), 'variant'));
};

export const editUser = async (data: UsersFields) => {
  if (data.variant !== 'edit') {
    return;
  }
  await axios.put(
    `${API_ROUTES.users}/${data.id}`,
    omit(userToBodyRequest(data), 'variant')
  );
};
