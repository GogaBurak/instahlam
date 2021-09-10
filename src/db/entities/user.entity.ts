import { IsEmail, IsString } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from "./comment.entity";
import { FeedEntity } from "./feed.entity";
import { PostEntity } from "./post.entity";
import { SubscriptionEntity } from "./subscription.entity";

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    @IsEmail()
    email: string

    @Column({ nullable: true })
    @IsString()
    password: string

    @Column({ unique: true })
    @IsString()
    nickname: string

    @Column({ nullable: true })
    thirdPartyId: string

    // @OneToMany(() => PostEntity, post => post.user)
    // posts: PostEntity[]

    // @OneToMany(() => CommentEntity, comment => comment.user)
    // comments: CommentEntity[]

    @OneToOne(() => FeedEntity, feed => feed.user, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    feed: FeedEntity

    @OneToMany(() => SubscriptionEntity, subscription => subscription.user)
    subscriptions: SubscriptionEntity[]
}