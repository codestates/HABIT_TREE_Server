import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { IsDate } from 'class-validator';

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
