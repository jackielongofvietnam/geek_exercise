import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    userID: string;

    @CreateDateColumn({
        type: 'timestamp',
        nullable: false
    })
    dateCreated: Date;

    @Column({ type: 'text', nullable: false })
    content: string;

    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'userID' })
    users: Users;
}


