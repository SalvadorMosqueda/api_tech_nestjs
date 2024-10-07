import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';
import { TaskCreateDto } from './dtos/task.createdto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { TaskUpdateDto } from './dtos/task.update.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'obtener todas tus tareas'})
  @ApiResponse({ status: 200, description: 'te retorna todas tus tareas' })
  @Get('')
  @UseGuards(AuthGuard('jwt'))
  getTasks(@CurrentUser() user: any) {
    return this.tasksService.findAll(user.id);
  }

  @ApiOperation({ summary: 'crear una tarea'})
  @ApiResponse({ status: 200, description: 'tarea creada con exito' })
  @Post('')
  @UseGuards(AuthGuard('jwt'))
  createTask(@CurrentUser() user: any, @Body() task: TaskCreateDto) {
    return this.tasksService.create(task,user);
  }

  @ApiOperation({ summary: 'actualizar una tarea'})
  @ApiResponse({ status: 200, description: 'tarea actualizada con exito' })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  updateTask( @CurrentUser() user: any, @Param('id')id:string,@Body() task: TaskUpdateDto) {
    return this.tasksService.update(task,id,user.id);
  }
  
  @ApiOperation({ summary: 'eliminar una tarea'})
  @ApiResponse({ status: 200, description: 'tarea eliminada con exito' })
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deleteTask(@Param('id') id:string ,@CurrentUser() user: any) {
    return this.tasksService.delete(id,user.id);
  }
}
