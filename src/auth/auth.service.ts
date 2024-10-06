import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { loginUserDto } from './dto/login-user.dto';
@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userRepository) {}

  async create(user: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: { username: user.username },
    });
    if (userExist) throw new ConflictException('El Usuario ya existe');
    try {
      const { password, username } = user;
      await this.userRepository.create({
        username,
        password: bcrypt.hashSync(password, 10),
      });
      return 'Usuario creado exitosamente';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error interno del servidor');
    }
  }

  async login(user: loginUserDto) {
    const { username } = user;
    const userExist = await this.userRepository.findOne({
      where: { username, status: '1' },
      select: ['username', 'password'],
    });
    if (!userExist) throw new ConflictException('Usuario no encontrado');

    if (bcrypt.compareSync(user.password, userExist.password)) {
      
      return 'Usuario logeado';
    } else {
      return 'Usuario o contraseña incorrecta';
    }
  }
}
