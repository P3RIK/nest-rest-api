import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@ApiTags('Користувачі')
@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @ApiOperation({summary: 'Створення нового користувача'})
    @ApiResponse({status: 201, type: User})
    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.UsersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Отримання списку всіх користувачів'})
    @ApiResponse({status: 200, type: User})
    @Get()
    getAllUsers() {
        return this.UsersService.getAllUsers()
    }

    @ApiOperation({summary: 'Отримання користувача за його Email'})
    @ApiResponse({status: 200, type: User})
    @Get(':email')
    getUserByEmail(@Param('email') email: string) {
        return this.UsersService.getUserByEmail(email)
    }
}
