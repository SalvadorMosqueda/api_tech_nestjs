import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
  Default,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/auth/entities/user.entity';



export enum TaskState {
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

  @CreatedAt
  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;

  @DeletedAt
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
