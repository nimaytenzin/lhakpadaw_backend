import { Product } from 'src/modules/product/entities/product.entity';
import { SubActivity } from 'src/modules/sub-activity/entities/sub-activity.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Product, (product) => product.activities)
  product: Product;

  @OneToMany(() => SubActivity, (subactivity) => subactivity.activity)
  subactivities: SubActivity[];
}
