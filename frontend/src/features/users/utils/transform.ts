import { Option } from '@/types/option';
import { UsersFields } from '@/features/users/types/schema';
import {
  UserGet,
  UserBase,
  UserCreateOrEdit,
} from '@/features/users/types/api';

export const usersToState = (users: UserGet[]): Option[] => {
  return users.map((user) => ({
    id: user.id.toString(),
    label: user.name,
  }));
};

export const userDetailsToState = (data: UserGet): UsersFields => {
  return {
    ...data,
    variant: 'edit',
    id: data.id.toString(),
    formerEmploymentPeriod: [
      new Date(data.formerEmploymentPeriod[0]),
      new Date(data.formerEmploymentPeriod[1]),
    ],
    salaryRange: [data.salaryRange[0], data.salaryRange[1]],
    registrationDateAndTime: new Date(data.registrationDateAndTime),
  };
};

export const userToBodyRequest = (data: UsersFields): UserCreateOrEdit => {
  const common: UserBase = {
    ...data,
    formerEmploymentPeriod: [
      data.formerEmploymentPeriod[0].toString(),
      data.formerEmploymentPeriod[1].toString(),
    ],
    students: data.isTeacher === true ? data.students : [],
    salaryRange: [data.salaryRange[0], data.salaryRange[1]],
    registrationDateAndTime: data.registrationDateAndTime.toString(),
  };

  switch (data.variant) {
    case 'create': {
      return { ...common, variant: data.variant };
    }
    case 'edit': {
      return { ...common, id: Number(data.id), variant: data.variant };
    }
  }
};
