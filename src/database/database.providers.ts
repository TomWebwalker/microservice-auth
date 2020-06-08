import { DATABASE_CONNECTION } from './../../constants';
import { FactoryProvider } from '@nestjs/common';
import { createConnection } from 'typeorm';

export const databaseProvider: FactoryProvider = {
  provide: DATABASE_CONNECTION,
  useFactory: async () =>
    await createConnection({
      type: 'mysql',
      port: 3306,
      host: process.env.DB_HOST || 'localhost',
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'microservice-pass',
      database: process.env.DB_DATABASE || 'project-db',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
};
