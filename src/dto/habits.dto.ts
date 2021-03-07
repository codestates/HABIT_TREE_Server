import { IsString, IsNumber } from 'class-validator';

export class HabitDto {
  @IsString()
  title: string;

  @IsNumber()
  pass: number;

  @IsNumber()
  clicked: number;

  @IsNumber()
  achieve: number;

  @IsString()
  treeType: string;

  @IsNumber()
  userId: number;
}
