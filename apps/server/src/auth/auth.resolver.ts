import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { LoginResponse } from '@/auth/dto/login-response';

import { LoginInput } from '@/auth/dto/login.input';
import { GqlAuthGuard } from '@/auth/gql-auth.guards';
import { User } from '@/user/entities/user.entity';
import { CreateUserInput } from '@/user/dto/create-user.input';
import { RefreshTokenResponse } from '@/auth/dto/refresh-token-response';
import { RefreshTokenInput } from '@/auth/dto/refreshTokenInput';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginInput,
    @Context() context: any,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signup(@Args('signupInput') signupInput: CreateUserInput) {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => RefreshTokenResponse)
  refreshAccessToken(
    @Args('refreshTokenInput') refreshTokenInput: RefreshTokenInput,
  ) {
    return this.authService.refreshAccessToken(refreshTokenInput);
  }
}
