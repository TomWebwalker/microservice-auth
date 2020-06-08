import { USER_REPOSITORY, DATABASE_CONNECTION } from './../../constants';
import { Connection } from "typeorm";
import { User } from "./user.entity";

export const userProviders = [
    {
      provide: USER_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: [DATABASE_CONNECTION],
    },
  ];