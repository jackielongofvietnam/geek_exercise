import { Column, Entity, PrimaryColumn, JoinColumn, OneToMany } from "typeorm";
import { Posts } from "./Posts";
import { Followers } from "./Followers";

@Entity()
export class Users {
    
    @PrimaryColumn({
        length: 5,
        nullable: false
    })
    id: string;

    @Column({ nullable: false, unique: true })
    username: string;

    @Column({ nullable: false, unique: true })
    password: string;
    
    @OneToMany(type => Posts, posts => posts.userID)
    posts: Posts[];

    @OneToMany(type => Followers, followers => followers.userID)
    followers: Followers[]
}