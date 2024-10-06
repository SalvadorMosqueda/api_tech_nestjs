import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany } from 'sequelize-typescript';
import { Task } from 'src/tasks/entities/tasks.entity';

@Table({
  tableName: 'users', // Nombre de la tabla en la base de datos
  timestamps: true,   // Habilitar timestamps automáticamente
  paranoid: true,     // Habilitar soft delete
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('0', '1'),
    defaultValue: '1',
    allowNull: false,
  })
  status: '0' | '1';

  @CreatedAt
  @Column({
    type: DataType.DATE,
   
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
   
  })
  updatedAt: Date;

  @DeletedAt
  @Column({
    type: DataType.DATE,
  
  })
  deletedAt: Date;


  @HasMany(() => Task)
  tasks: Task[];

}
