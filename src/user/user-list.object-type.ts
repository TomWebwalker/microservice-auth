import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserModel } from './user.model';

@ObjectType()
export class UserList {
  @Field(type => [UserModel])
  rows: UserModel[];

  @Field(type => Int)
  count: number;
}
