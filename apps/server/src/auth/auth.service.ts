import { Injectable } from '@nestjs/common';
import { LoginInput } from '@/auth/dto/login.input';
import { UserService } from '@/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { CreateUserInput } from '@/user/dto/create-user.input';

import * as jwt from 'jsonwebtoken';
import { RefreshTokenInput } from '@/auth/dto/refreshTokenInput';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(loginInput: LoginInput) {
    const { email, password } = loginInput;
    const user = await this.userService.findOneByEmail(email);
    const hash = await bcrypt.hash(password, 10);
    // CHECK IF THE PASSWORD IS VALID
    const isMatch = bcrypt.compare(password, hash);

    if (!isMatch) {
      throw new Error('Password is invalid');
    }
    return user;
  }

  // auth.service.ts
  login(user: User) {
    const payload = {
      sub: String(user._id),
      name: user.name,
      email: user.email,
    };

    return {
      user,
      authToken: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
        expiresIn: '1d',
      }),
      refreshToken: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
        expiresIn: '7d',
      }),
    };
  }

  async signup(payload: CreateUserInput) {
    // CHECK IF THE USER ALREADY EXISTS
    const user = await this.userService.findOneByEmail(payload.email);

    if (user) {
      throw new Error('User already exists, login instead');
    }

    // GENERATE HASH PASSWORD TO SAVE
    const hash = await bcrypt.hash(payload.password, 10);
    return this.userService.createUser({ ...payload, password: hash });
  }

  async refreshAccessToken(input: RefreshTokenInput) {
    jwt.verify(input.refreshToken, this.configService.get('JWT_SECRET'));

    const user = await this.userService.findOne(input._id);

    if (!user) {
      throw new Error('User not found');
    }

    const payload = {
      email: user.email,
      name: user.name,
      sub: user._id,
    };

    return {
      user,
      authToken: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
        expiresIn: '20sec',
      }),
      refreshToken: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
        expiresIn: '7d',
      }),
    };
  }
}
