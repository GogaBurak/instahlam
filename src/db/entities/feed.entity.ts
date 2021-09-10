import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Feed_PostEntity } from "./feed_post.entity";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity('Feed')
export class FeedEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => UserEntity, user => user.feed)
    user: UserEntity

    @OneToMany(() => Feed_PostEntity, feedPost => feedPost.feed)
    feedPosts: Feed_PostEntity[]
}