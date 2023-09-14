import { IsString, IsNotEmpty } from "class-validator";

export class createPostDto {

    @IsNotEmpty()
    @IsString()
    userID: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}