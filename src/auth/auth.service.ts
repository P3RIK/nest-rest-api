import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) {}

    async register(dto: CreateUserDto) {
        const candidate = await this.usersService.getUserByEmail(dto.email)
        if (candidate) {
            throw new HttpException('Такий користувач вже існує!', HttpStatus.BAD_REQUEST)
        }
        const hashPass = await bcrypt.hash(dto.password, 4)
        const user = await this.usersService.createUser({...dto, password: hashPass})
        return this.generateToken(user)
    }

    async login(dto: CreateUserDto) {
        const user = await this.usersService.getUserByEmail(dto.email)
        const passwordEquals = await bcrypt.compare(dto.password, user.password)
        if (user && passwordEquals) {
            return this.generateToken(user)
        }
        throw new HttpException('Невірна пошта або пароль!', HttpStatus.BAD_REQUEST)
    }

    async generateToken(user: User) {
        const payload = {id: user.id, email: user.email, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
