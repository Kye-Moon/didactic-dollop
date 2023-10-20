import { Module } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { AuthResolver } from '@/auth/auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@/user/user.module';
import { JwtStrategy } from '@/auth/jwt.strategy';
import { LocalStrategy } from '@/auth/local.stratedgy';

@Module({
  providers: [
    AuthService,
    AuthResolver,
    ConfigService,
    JwtService,
    JwtStrategy,
    LocalStrategy,
  ],
  imports: [UserModule, PassportModule, ConfigModule],
  exports: [AuthService],
})
export class AuthModule {}
