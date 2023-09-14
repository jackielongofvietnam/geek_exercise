import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userID: string;

    @CreateDateColumn({
        type: 'timestamp'
    })
    dateCreated: Date;

    @Column()
    content: string;

    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'userID' })
    users: Users;
}


