import { ActivityModule } from 'src/modules/activity/activity.module';
import { Activity } from 'src/modules/activity/entities/activity.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class SubActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'float', nullable: false })
  amount: number;

  @ManyToOne(() => Activity, (activity) => activity.subactivities)
  activity: Activity;
}
