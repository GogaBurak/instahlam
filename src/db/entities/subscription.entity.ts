import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('Subscription')
export class SubscriptionEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => UserEntity, user => user.subscriptions, { onDelete: 'CASCADE' })
    user: UserEntity

    @Column()
    subscribedTo: number
}