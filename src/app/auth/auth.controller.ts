import { AuthService } from './auth.service';
import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/auth/steam')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('authenticate')
  @ApiOperation({ summary: 'Etapa de authenticação' })
  @ApiResponse({
    status: 200,
    description: 'Authenticação com sucesso',
  })
  @UseGuards(AuthGuard('steam'))
  async authenticate(@Res() res) {
    return await res.redirect('/api/auth/steam/authenticate/callback');
  }

  @Get('authenticate/callback')
  @ApiOperation({ summary: 'Etapa de callback da authenticação' })
  @ApiResponse({
    status: 200,
    description: 'Callback retornado!',
  })
  @UseGuards(AuthGuard('steam'))
  async authenticateCallback(@Req() req, @Res() res, @Query() params: string) {
    return this.authService.authenticateCallback(req, res, params);
  }
}
