import { IsString, IsNotEmpty } from "class-validator";

export class createFollowerDto {
    
    @IsNotEmpty()
    @IsString()
    userID: string;

    @IsNotEmpty()
    @IsString()
    followerID: string;
}