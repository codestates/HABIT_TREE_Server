import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  Unique,
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
} from 'class-validator';
import { Habit } from './habits.entity';
import * as bcrypt from 'bcrypt';

require('dotenv').config();

@Entity()
@Unique(['username', 'email'])
export class User {
  static findOrCreate(arg0: any, arg1: (err: any, user: any) => any) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  nickname: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  password?: string;

  @OneToMany(() => Habit, (habit) => habit.user)
  habits: Habit[];

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    if (!this.password) {
      return;
    } else {
      this.password = await bcrypt.hash(
        this.password,
        Number(process.env.HASH_SALT),
      );
    }
  }
}
