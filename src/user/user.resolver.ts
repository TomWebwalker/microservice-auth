import { Query, Resolver } from '@nestjs/graphql';
import { UserList } from './user-list.object-type';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver(of => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => UserList, { nullable: true })
  async users(): Promise<UserList> {
    return this.userService.findAll();
  }
}
