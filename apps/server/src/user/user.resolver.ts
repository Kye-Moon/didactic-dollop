import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from '@/user/dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/auth/jwt-auth.guards';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  //Test to see if blah blah blah
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => String, { name: 'helloworld' })
  hello(@Context() context: any) {
    // context.res.cookie(
    //   'access_token',
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt5ZW1vb24yIiwibmFtZSI6Imt5ZSIsInN1YiI6IjY1MjdmMjQ5N2FiYWYwZWYwZGM0YzAxNSIsImlhdCI6MTY5NzM3NzI1NywiZXhwIjoxNjk3NDYzNjU3fQ.aJ1N85f443XBo2deWHW_M5wyOg9zyhTgLvfY3VPMnYU',
    //   {
    //     httpOnly: true,
    //   },
    // );
    return '{}';
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput._id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }
}
