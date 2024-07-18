import { Module } from '@nestjs/common';
import { SubActivityService } from './sub-activity.service';
import { SubActivityController } from './sub-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubActivity } from './entities/sub-activity.entity';

@Module({
  controllers: [SubActivityController],
  providers: [SubActivityService],
  imports: [TypeOrmModule.forFeature([SubActivity])],
})
export class SubActivityModule {}
