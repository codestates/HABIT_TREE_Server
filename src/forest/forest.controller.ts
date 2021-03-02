import { Body, Controller, Post } from '@nestjs/common';
import { ForestService } from './forest.service';

@Controller('forest')
export class ForestController {
  constructor(private readonly forestService: ForestService) {}

  @Post('upload')
  upload(@Body() body: object): any {
    this.forestService.upload(body);
  }

  @Post('findAll')
  findAll(@Body('username') username: string): any {
    return this.forestService.findAll(username);
  }
}
