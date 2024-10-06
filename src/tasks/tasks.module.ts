import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/auth/entities/user.entity';
import { Task } from './entities/tasks.entity';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
  imports: [SequelizeModule.forFeature([User,Task])],
})
export class TasksModule {}
