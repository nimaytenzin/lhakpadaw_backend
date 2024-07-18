import { Job } from "src/modules/job/entities/job.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    role: string

    @Column({ type: 'varchar', length: 255 })
    designation: string;

    @Column({ type: 'varchar', length: 255 })
    phoneNumber: string;

    @Column({ type: 'varchar', length: 255 })
    pinCode: string;

    @OneToMany(() => Job, (job) => job.user)
    jobs: Job[];

    @OneToMany(() => Job, (job) => job.assignedBy)
    delegatedJobs: Job[];
}
