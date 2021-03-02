import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
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
import { User } from './user.entity';

@Entity()
export class Forest {
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

  @Column()
  userId: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;
}
