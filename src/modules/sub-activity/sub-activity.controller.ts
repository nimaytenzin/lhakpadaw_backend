import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubActivityService } from './sub-activity.service';
import { CreateSubActivityDto } from './dto/create-sub-activity.dto';
import { UpdateSubActivityDto } from './dto/update-sub-activity.dto';

@Controller('sub-activity')
export class SubActivityController {
  constructor(private readonly subActivityService: SubActivityService) {}

  @Post()
  create(@Body() createSubActivityDto: CreateSubActivityDto) {
    return this.subActivityService.create(createSubActivityDto);
  }

  @Get()
  findAll() {
    return this.subActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubActivityDto: UpdateSubActivityDto) {
    return this.subActivityService.update(+id, updateSubActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subActivityService.remove(+id);
  }
}
