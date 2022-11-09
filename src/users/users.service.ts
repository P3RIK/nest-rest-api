import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { where } from 'sequelize';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findByPk(id)
        return user
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user
    }
}
