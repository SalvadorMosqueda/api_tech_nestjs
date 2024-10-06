import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Task } from 'src/tasks/entities/tasks.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigService,
    SequelizeModule.forFeature([User,Task]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory:  (configService:ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '2h' },
      }),
    }),

  ],
  exports: [SequelizeModule],
})
export class AuthModule {}
