import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { joiValidate } from './config';
import { TasksModule } from './tasks/tasks.module';
import { User } from './auth/entities/user.entity';
import { Task } from './tasks/entities/tasks.entity';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  controllers: [AppController,AuthController],
  providers: [AppService,AuthService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationSchema: joiValidate,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      models: [User, Task],
      pool: {
        max: 128,
        min: 5,
        acquire: 60000,
        idle: 10000,
      },
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
