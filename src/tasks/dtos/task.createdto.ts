import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskState } from "../entities/tasks.entity";
import { ApiProperty } from "@nestjs/swagger";

export class TaskCreateDto {
    @ApiProperty({
        example: 'Task 1',
        description: 'titulo de la tarea',
    })
    @IsString()
    title: string;

    @ApiProperty({
        example: 'en esta  tarea se debe hacer etc......',
        description: 'descripcion de la tarea',
    })
    @IsString()
    description: string;
    
    @ApiProperty({
        example: 'open | in_progress | done',
        description: 'estado de la tarea',
    })
    @IsOptional()
    @IsEnum(TaskState)
    state?: TaskState;
  
}