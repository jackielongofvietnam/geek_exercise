import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

export class Posts {
    // @PrimaryGeneratedColumn()
    // id: number;

    @Column({
        type: 'varchar',
        length: 5,
        nullable: false
    })
    userID: string;

    // @CreateDateColumn({
    //     type: 'timestamp' 
    // })
    // dateCreated: Date;

    @Column({
        type: "text",
    })
    content: string;

}


