import { SubActivity } from "src/modules/sub-activity/entities/sub-activity.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'integer'})
    assignedDay:number

    @Column({type:'integer'})
    assignedWeek:number

    @Column({type:'integer'})
    assignedMonth:number

    @Column({type:'integer'})
    assignedYear:number

    @Column({type:'text',nullable:true})
    remarks:string;

    @Column({type:'varchar',length:255})
    status:string;

    @ManyToOne(()=>SubActivity,(subActivity)=>subActivity.jobs)
    subActivity:SubActivity;

    @ManyToOne(()=>User,(user)=>user.jobs)
    user:User;
    
    @ManyToOne(()=>User,(user)=>user.delegatedJobs)
    assignedBy:User;

}
