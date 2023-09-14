import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Followers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    userID: string;

    @Column({ nullable: false })
    followerID: string;

    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({name: 'userID'})
    users1: Users;

    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({name: 'followerID'})
    users2: Users;
}