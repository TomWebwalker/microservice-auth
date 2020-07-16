import { User } from './../user/user.model';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import { RegisterInput } from './inputs/register.input';
import { GraphQLError } from 'graphql';

@Resolver(of => User)
export class AuthResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returns => User, { nullable: true })
  async register(
    @Args('registerInput') registerInput: RegisterInput,
  ): Promise<User> {
    return this.userService.create(registerInput).catch(error => {
      throw new GraphQLError(error.code);
    });
  }
}
