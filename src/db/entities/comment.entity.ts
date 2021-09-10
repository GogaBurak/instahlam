import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { HashtagEntity } from "./hashtag.entity";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity('Comment')
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    text: string

    @Column({nullable: true})
    image?: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(type => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: UserEntity

    @ManyToOne(type => PostEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
    post: PostEntity

    @ManyToMany(type => HashtagEntity, { cascade: true, onDelete: 'CASCADE' })
    @JoinTable({ name: 'comment_hashtag' })
    hashtags: HashtagEntity[]
}