import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryColumn({
        type: 'varchar',
        length: 5,
        nullable: false
    })
    id: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    password: string;
    
}