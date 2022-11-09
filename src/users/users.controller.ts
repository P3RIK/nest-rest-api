import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.UsersService.createUser(userDto)
    }

    @Get()
    getAllUsers() {
        return this.UsersService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param('userID') id: number) {
        return this.UsersService.getUserById(id)
    }

}
