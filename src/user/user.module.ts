import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { userProviders } from './user.provider';

@Module({
    imports: [DatabaseModule],
    providers: [
        UserService,
        ...userProviders,
    ]
})
export class UserModule {}
