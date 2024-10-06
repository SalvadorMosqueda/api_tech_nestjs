import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/tasks')
  getTasks() {
    return this.tasksService.findAll();
  }

  @Post('/tasks')
  createTask(@Body() task: any) {
    return this.tasksService.create(task);
  }
  @Put('/tasks/:id')
  updateTask(@Body() task: any) {
    return this.tasksService.update(task);
  }
  @Delete('/tasks/:id')
  deleteTask(@Body() task: any) {
    return this.tasksService.delete(task);
  }
}
