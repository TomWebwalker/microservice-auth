import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: ({ message }) => ({ message }),
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
