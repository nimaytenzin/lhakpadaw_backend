import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './modules/product/entities/product.entity';
import { ProductModule } from './modules/product/product.module';
import { ActivityModule } from './modules/activity/activity.module';
import { Activity } from './modules/activity/entities/activity.entity';
import { SubActivity } from './modules/sub-activity/entities/sub-activity.entity';
import { SubActivityModule } from './modules/sub-activity/sub-activity.module';
import { UserModule } from './modules/user/user.module';
import { JobModule } from './modules/job/job.module';
import { User } from './modules/user/entities/user.entity';
import { Job } from './modules/job/entities/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'overlord123',
      database: 'lhakpadaw',
      entities: [Product, Activity, SubActivity, User, Job],
      synchronize: true,
    }),
    ActivityModule,
    ProductModule,
    SubActivityModule,
    UserModule,
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
