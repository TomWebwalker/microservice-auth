import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthResolver],
})
export class AuthModule {}
