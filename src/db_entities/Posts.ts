import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

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

}


