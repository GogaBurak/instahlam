import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { UserEntity } from "src/db/entities/user.entity";
import { HashtagEntity } from "./hashtag.entity";

@Entity('Post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    text: string

    @Column()
    image: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: UserEntity

    @ManyToMany(type => HashtagEntity, { cascade: true, onDelete: 'CASCADE' })
    @JoinTable({ name: 'post_hashtag' })
    hashtags: HashtagEntity[]
}