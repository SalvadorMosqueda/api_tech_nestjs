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
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userRepository,
    private readonly jwtService: JwtService,
  ) {}

  async create(user: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: { username: user.username },
    });
    if (userExist) throw new ConflictException('El Usuario ya existe');
    try {
      const { password, username } = user;

      const newUser = await this.userRepository.create({
        username,
        password: bcrypt.hashSync(password, 10),
      });
      delete newUser.dataValues.password;
      const { id } = newUser;
      return { ...newUser.dataValues, token: this.getJwtToken({ username,id }) };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error interno del servidor');
    }
  }

  async login(user: loginUserDto) {
    const { username } = user;
    const userExist = await this.userRepository.findOne({
      where: { username, status: '1' },
      attributes: ['id','username', 'password', 'status'],
    });

    if (!userExist) throw new ConflictException('Usuario no encontrado');

    if (bcrypt.compareSync(user.password, userExist.password)) {
      delete userExist.dataValues.password;
      const { id } = userExist;
      return { ...userExist.dataValues, token: this.getJwtToken({ username,id }) };
    } else {
      return 'Usuario o contraseña incorrecta';
    }
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
