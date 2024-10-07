import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class loginUserDto {
  @ApiProperty({
    example: 'User123',
    description: 'debe contener al menos 3 caracteres',
  })
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty({
    example: 'Password123',
    description:
      'debe contener al menos 6 caracteres, una mayuscula, una minuscula y un numero',
  })
  @IsString()
  password: string;
}
