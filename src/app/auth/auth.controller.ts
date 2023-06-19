import { Controller, Get, Redirect, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiOperation({ summary: 'Authenticar usuario' })
  @ApiResponse({
    status: 200,
    description: 'Usuario autenticado',
  })
  authenticate(@Res() response: Response) {
    return "em construção";
  }

  @Get('callback')
  @Redirect('https://www.google.com/', 301)
  @ApiOperation({ summary: 'Callback da autenticação' })
  @ApiResponse({
    status: 200,
    description: 'Callback Retornado',
  })
  authenticateCallback(@Req() request: Request, @Res() response: Response) {
    return "em construção";
  }
}
