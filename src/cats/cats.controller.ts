import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private CatsService: CatsService) {} // private는 선언과 초기화를 동시에 해줌
  @Get()
  findAll(): Cat[] {
    // 빈 배열 형식으로 type을 지정하여 배열로 나오게 함.
    return this.CatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns #${id} cat.`;
  }

  @Post()
  create(@Body() CreateCatDto: CreateCatDto) {
    return this.CatsService.create(CreateCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() CreateCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
