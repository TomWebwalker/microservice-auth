import { Connection } from 'typeorm';
import { UserEntity } from './user.entity';
import { USER_REPOSITORY, DATABASE_CONNECTION } from '@constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: [DATABASE_CONNECTION],
  },
];
