import { BaseEntity, PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 50})
    shortDesc: string

    @Column({type: "varchar", nullable: true})
    longDesc?: string

    @Column({type: "boolean", default: false})
    isDone: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Todo