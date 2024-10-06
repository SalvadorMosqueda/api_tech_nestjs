import { Injectable } from '@nestjs/common';
import { User } from '../auth/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
    ) {}
        
    async userRegister(user: any) {
        return this.userRepository.create(user);
    }

    async userLogin(user: any) {
        return this.userRepository.findOne({ where: { username: user.email, password: user.password } });
    }
}
