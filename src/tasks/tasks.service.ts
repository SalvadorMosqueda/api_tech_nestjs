import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Task } from './entities/tasks.entity';
import { InjectModel } from '@nestjs/sequelize';
import { TaskCreateDto } from './dtos/task.createdto';
import { TaskUpdateDto } from './dtos/task.update.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskRepository: typeof Task,
  ) {}

  async findAll(id: string) {
    const tasks = await this.taskRepository.findAll({ where: { userId: id } });
    if (!tasks)
      throw new InternalServerErrorException('Error interno del servidor');
    return tasks;
  }

  async create(task: TaskCreateDto, user: any) {
    console.log(user.id);
    const newTask = { ...task, userId: user.id };
    const newTasks = await this.taskRepository.create(newTask);
    if (!newTasks)
      throw new InternalServerErrorException('Error interno del servidor');
    return 'tarea creada con exito';
  }

  async update(task: TaskUpdateDto, id: string, user: string) {
    console.log(id, task, user);
    const validateTask = await this.taskRepository.findOne({
      where: { id: id, userId: user },
    });
    if (!validateTask) throw new NotFoundException('No existe la tarea');
    if (validateTask.dataValues.status === '0')
      throw new UnauthorizedException('La tarea fue eliminada');
    const res = await this.taskRepository.update(task, {
      where: {
        id: id,
        userId: user,
      },
    });
    if (!res)
      throw new InternalServerErrorException('Error interno del servidor');
    console.log(res);
    return 'Tarea actualizada con exito';
  }

  async delete(id: any, user: string) {
    console.log(id, user);
    const task = await this.taskRepository.findOne({
      where: { id: id, userId: user },
    });

    if (!task) throw new NotFoundException('la tarea no existe');

    if (task.dataValues.status === '0')
      throw new UnauthorizedException('La tarea ya  fue eliminada');

    const res = await this.taskRepository.update(
      { status: '0', deletedAt: new Date() },
      {
        where: {
          id: task.id,
          userId: user,
        },
      },
    );
    if (res[0] === 1) {
      return 'tarea eliminada con exito';
    } else {
      return 'Error al eliminar la tarea';
    }
  }
}
