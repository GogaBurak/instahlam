import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FeedEntity } from "./feed.entity";
import { PostEntity } from "./post.entity";

@Entity('feed_post')
export class Feed_PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne( () => FeedEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'feed_id', referencedColumnName: 'id' })
    feed: FeedEntity

    @ManyToOne( () => PostEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
    post: PostEntity
}