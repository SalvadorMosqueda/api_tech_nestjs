import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';
import { TaskCreateDto } from './dtos/task.createdto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { TaskUpdateDto } from './dtos/task.update.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  getTasks(@CurrentUser() user: any) {
    return this.tasksService.findAll(user.id);
  }

  @Post('')
  @UseGuards(AuthGuard('jwt'))
  createTask(@CurrentUser() user: any, @Body() task: TaskCreateDto) {
    return this.tasksService.create(task,user);
  }
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  updateTask( @CurrentUser() user: any, @Param('id')id:string,@Body() task: TaskUpdateDto) {
    return this.tasksService.update(task,id,user.id);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deleteTask(@Param('id') id:string ,@CurrentUser() user: any) {
    return this.tasksService.delete(id,user.id);
  }
}
