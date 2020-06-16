import { USER_REPOSITORY } from './../../constants';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserList } from './user-list.object-type';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserList> {
    return this.userRepository.findAndCount().then(([rows, count]) => ({ rows, count }));
  }
}
  