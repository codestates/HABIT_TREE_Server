import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Forest } from 'src/entity/forest.entity';
import { ForestController } from './forest.controller';
import { ForestService } from './forest.service';

@Module({
  imports: [TypeOrmModule.forFeature([Forest]), AuthModule],
  controllers: [ForestController],
  providers: [ForestService],
  exports: [ForestService],
})
export class ForestModule {}
