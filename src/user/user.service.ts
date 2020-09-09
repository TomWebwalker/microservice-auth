import { User } from './user.model';
import { USER_REPOSITORY } from '@constants';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserList } from './user-list.object-type';
import { RegisterInput } from '../auth/inputs/register.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserList> {
    return this.userRepository
      .findAndCount()
      .then(([rows, count]) => ({ rows, count }));
  }

  async create(user: RegisterInput): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(user.password, salt);
    return this.userRepository.save({...user, password});
  }
}
