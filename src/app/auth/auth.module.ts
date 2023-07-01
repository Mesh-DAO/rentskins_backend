import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { SteamStrategy } from './auth.strategy';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'steam' }), HttpModule],
  controllers: [AuthController],
  providers: [SteamStrategy, AuthService, JwtService],
})
export class AuthModule {}
