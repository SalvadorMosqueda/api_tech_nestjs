import { Injectable } from '@nestjs/common';
import { Task } from './entities/tasks.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskRepository: typeof Task,
  ) {}

  async findAll() {
    return this.taskRepository.findAll();
  }

  async create(task: any) {
    this.taskRepository.create(task);
  }

  async update(task: any) {
    const [numberOfAffectedRows] = await this.taskRepository.update(task, {
      where: {
        id: task.id,
        status: 1,
      },
    });
    return numberOfAffectedRows;
  }

  async delete(task: any) {
    const res = await this.taskRepository.update(
      { status: 0,deletedAt: new Date() }, // Cambia el status a 0
      {
        where: {
          id: task.id, // Busca por id
        },
      },
    );

    if (res[0] === 1) {
      return 'Task deleted successfully';
    } else {
      return 'Task not found';
    }
  }
}
