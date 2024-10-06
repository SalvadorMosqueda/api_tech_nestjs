import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

import { User } from 'src/users/entities/user.entity';

enum TaskState {
  open = 'open',
  in_progress = 'in_progress',
  done = 'donde',
}

@Table({
  tableName: 'tasks', // Nombre de la tabla en la base de datos
  timestamps: true, // Habilitar timestamps automáticamente
})

export class Task extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column({ type: DataType.ENUM(...Object.values(TaskState)) })
  state: string;

  @Column({ type: DataType.ENUM('0', '1'), defaultValue: '1' })
  status: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
