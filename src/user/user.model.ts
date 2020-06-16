import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@ObjectType()
export class UserModel implements UserEntity {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
