import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Followers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userID: string;

    @Column()
    followerID: string;
}