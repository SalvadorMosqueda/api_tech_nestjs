import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: 'User123',
        description: 'debe contener al menos 3 caracteres',
      })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    username: string;
  
    @ApiProperty({
        example: 'Password123',
        description: 'debe contener al menos 6 caracteres, una mayuscula, una minuscula y un numero',
      })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches( /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 
        { message: 'password must have a Uppercase,lowecase letter and a number' })

    password: string;
}