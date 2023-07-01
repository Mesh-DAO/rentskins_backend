import { AuthService } from './auth.service';
import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth/steam')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('authenticate')
  @UseGuards(AuthGuard('steam'))
  async authenticate(@Res() res) {
    return await res.redirect('/api/auth/steam/authenticate/callback');
  }

  @Get('authenticate/callback')
  @UseGuards(AuthGuard('steam'))
  async authenticateCallback(@Req() req, @Res() res, @Query() params: string) {
    return this.authService.authenticateCallback(req, res, params);
  }
}
