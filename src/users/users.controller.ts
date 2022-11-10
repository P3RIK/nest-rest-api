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

    @ApiOperation({summary: 'Отримання користувача за його ID'})
    @ApiResponse({status: 200, type: User})
    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.UsersService.getUserById(id)
    }
}
