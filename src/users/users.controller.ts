import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { loginDTO } from './dto/auth.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('auth/singup')
  
  register(@Body() user: loginDTO) {
    this.usersService.userRegister(user);
  }
  @Post('auth/login')
    login(@Body() user: loginDTO) {
        this.usersService.userLogin(user);
    }
}
