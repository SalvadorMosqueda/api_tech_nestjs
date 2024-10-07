import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskState } from "../entities/tasks.entity";

export class TaskCreateDto {
 
    @IsString()
    title: string;
    @IsString()
    description: string;
  
    @IsOptional()
    @IsEnum(TaskState)
    state?: TaskState;
  
}