import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  AfterUpdate,
  JoinColumn,
  RelationId,
} from 'typeorm';
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNumber,
} from 'class-validator';
import { User } from './user.entity';
// import { User } from './user.entity';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  pass: number;

  @Column()
  clicked: number;

  @Column()
  achieve: number;

  @Column()
  treeType: string;

  @ManyToOne(() => User, (user) => user.habits, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @Column({ nullable: true }) // <-- forgot to add this!
  @RelationId((habits: Habit) => habits.user)
  userId: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;
}
