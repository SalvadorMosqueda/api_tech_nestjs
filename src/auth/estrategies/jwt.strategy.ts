import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt.payload.interface';
import { User } from '../entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        
    });
  }
  async validate(payload: JwtPayload) {
    const { username } = payload;

    return { username };
  }
}
