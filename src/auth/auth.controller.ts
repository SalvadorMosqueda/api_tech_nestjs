import { Controller,Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { loginUserDto } from './dto/login-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Crear nuevo usuario'})
  @ApiResponse({ status: 200, description: 'se retorna los datos del usario y el token' })
  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }
 @ApiOperation({ summary: 'Inicio de sesión'})
  @ApiResponse({ status: 200, description: 'se retorna los datos del usario y el token' })
  @Post('login')
  login(@Body() user: loginUserDto) {
    return this.authService.login(user);
  }
}
