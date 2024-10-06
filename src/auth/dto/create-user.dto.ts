import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    username: string;
  
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches( /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 
        { message: 'password must have a Uppercase,lowecase letter and a number' })

    password: string;
}