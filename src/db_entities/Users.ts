import { Column, Entity, PrimaryColumn, JoinColumn, OneToMany } from "typeorm";
import { Posts } from "./Posts";
import { Followers } from "./Followers";

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
    
    @OneToMany(type => Posts, posts => posts.userID)
    posts: Posts[];

    @OneToMany(type => Followers, followers => followers.userID)
    followers: Followers[]
}