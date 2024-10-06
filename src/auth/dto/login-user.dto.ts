import { IsString, MinLength } from "class-validator";

export class loginUserDto {
    @IsString()
    @MinLength(3)
    username: string;
    @IsString()
    password: string;
}