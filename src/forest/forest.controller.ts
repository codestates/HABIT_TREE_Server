import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ForestService } from './forest.service';

@Controller('forest')
export class ForestController {
  constructor(private readonly forestService: ForestService) {}

  @Post('upload')
  upload(@Body() body: object): any {
    this.forestService.upload(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('findAll')
  findAll(@Req() req: any): any {
    return this.forestService.findAll(req.user.id);
  }
}
