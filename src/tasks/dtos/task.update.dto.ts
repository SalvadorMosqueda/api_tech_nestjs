import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskState } from '../entities/tasks.entity';

export class TaskUpdateDto {
 
  @IsString()
  @IsOptional()
  title: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsOptional()
  @IsEnum(TaskState)
  state?: TaskState;
}
