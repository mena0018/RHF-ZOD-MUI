import { useQuery } from '@tanstack/react-query';
import {
  getGenders,
  getLanguages,
  getSkills,
  getStates,
  getUsers,
  getUserDetails,
  STATES_KEY,
  LANGUAGES_KEY,
  GENDERS_KEY,
  SKILLS_KEY,
  USER_KEY,
  USERS_KEY,
} from '@/features/users/services/api';

export function useStates() {
  return useQuery({
    queryKey: [STATES_KEY],
    queryFn: getStates,
  });
}

export function useLanguages() {
  return useQuery({
    queryKey: [LANGUAGES_KEY],
    queryFn: getLanguages,
  });
}

export function useGenders() {
  return useQuery({
    queryKey: [GENDERS_KEY],
    queryFn: getGenders,
  });
}

export function useSkills() {
  return useQuery({
    queryKey: [SKILLS_KEY],
    queryFn: getSkills,
  });
}

export function useUsers() {
  return useQuery({
    queryKey: [USERS_KEY],
    queryFn: getUsers,
  });
}

export function useUserDetails(id: string) {
  return useQuery({
    queryKey: [USER_KEY, { id }],
    queryFn: () => getUserDetails(id),
    enabled: Boolean(id),
  });
}
