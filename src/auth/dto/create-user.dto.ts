import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;
  
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password: string;
}