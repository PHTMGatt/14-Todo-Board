import { UserData } from '../interfaces/UserData';

const demoUsers: UserData[] = [
  { id: 1, username: 'JollyGuru' },
  { id: 2, username: 'SunnyScribe' },
  { id: 3, username: 'RadiantComet' },
];

const retrieveUsers = async (): Promise<UserData[]> => {
  return demoUsers.map((user) => ({ ...user }));
};

export { demoUsers, retrieveUsers };
