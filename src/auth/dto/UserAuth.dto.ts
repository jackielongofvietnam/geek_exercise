import { IsString, IsNotEmpty } from "class-validator";

export class UserAuthDto {
    
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}