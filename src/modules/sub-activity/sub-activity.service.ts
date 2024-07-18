import { Injectable } from '@nestjs/common';
import { CreateSubActivityDto } from './dto/create-sub-activity.dto';
import { UpdateSubActivityDto } from './dto/update-sub-activity.dto';

@Injectable()
export class SubActivityService {
  create(createSubActivityDto: CreateSubActivityDto) {
    return 'This action adds a new subActivity';
  }

  findAll() {
    return `This action returns all subActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subActivity`;
  }

  update(id: number, updateSubActivityDto: UpdateSubActivityDto) {
    return `This action updates a #${id} subActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} subActivity`;
  }
}
