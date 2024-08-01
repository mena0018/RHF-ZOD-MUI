type Create = {
  variant: 'create';
};

type Edit = {
  id: number;
  variant: 'edit';
};

export type UserBase = {
  email: string;
  name: string;
  states: string[];
  gender: string;
  skills: string[];
  languagesSpoken: string[];
  registrationDateAndTime: string;
  formerEmploymentPeriod: [string, string];
  salaryRange: [number, number];
  isTeacher: boolean;
  students: { name: string }[];
};

export type UserGet = Edit & UserBase;
export type UserCreateOrEdit = UserBase & (Create | Edit);
