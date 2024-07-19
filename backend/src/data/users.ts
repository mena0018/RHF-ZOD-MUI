type Student = {
  name: string;
};

type User = {
  email: string;
  formerEmploymentPeriod: string[];
  name: string;
  gender: string;
  languagesSpoken: string[];
  registrationDateAndTime: string;
  salaryRange: number[];
  skills: string[];
  states: string[];
  isTeacher: boolean;
  students: Student[];
  id: number;
};

const users: User[] = [
  {
    email: 'james@gmail.com',
    formerEmploymentPeriod: [
      'Thu Jan 18 2024 01:06:58 GMT+0330 (Iran Standard Time)',
      'Thu Jan 18 2024 01:06:58 GMT+0330 (Iran Standard Time)',
    ],
    name: 'David',
    gender: '1',
    languagesSpoken: ['1', '2'],
    registrationDateAndTime:
      'Thu Jan 18 2024 01:06:58 GMT+0330 (Iran Standard Time)',
    salaryRange: [0, 2000],
    skills: ['1', '2'],
    states: ['1', '2'],
    isTeacher: true,
    students: [
      {
        name: '1111',
      },
      {
        name: '2222',
      },
    ],
    id: 1,
  },
  {
    email: 'Robert@gmail.com',
    formerEmploymentPeriod: [
      'Wed Aug 09 2023 00:00:00 GMT+0330 (Iran Standard Time)',
      'Thu Jan 18 2024 01:20:23 GMT+0330 (Iran Standard Time)',
    ],
    name: 'Robert',
    gender: '2',
    languagesSpoken: ['1', '2', '3'],
    registrationDateAndTime:
      'Wed Jan 07 1981 04:40:23 GMT+0330 (Iran Standard Time)',
    salaryRange: [67, 87],
    skills: ['1', '2'],
    states: ['3'],
    isTeacher: true,
    students: [
      {
        name: 'fsdfdsf',
      },
      {
        name: 'sdfsfsf',
      },
      {
        name: 'sfdsfsf',
      },
    ],
    id: 2,
  },
  {
    email: 'john@gmail.com',
    formerEmploymentPeriod: [
      'Sat Jan 20 2024 18:12:01 GMT+0330 (Iran Standard Time)',
      'Sat Jan 20 2024 18:12:01 GMT+0330 (Iran Standard Time)',
    ],
    name: 'John',
    gender: '1',
    languagesSpoken: ['1', '2'],
    registrationDateAndTime:
      'Sat Jan 20 2024 18:12:01 GMT+0330 (Iran Standard Time)',
    salaryRange: [0, 2000],
    skills: ['1', '2'],
    states: ['1'],
    isTeacher: true,
    students: [
      {
        name: 'sdsd',
      },
    ],
    id: 3,
  },
];

export default users;
