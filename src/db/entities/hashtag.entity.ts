import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from "./comment.entity";
import { PostEntity } from "./post.entity";

@Entity('Hashtag')
export class HashtagEntity {
    constructor(tag) {
        this.tag = tag;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    tag: string
}