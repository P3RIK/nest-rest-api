import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Ролі')
@Controller('roles')
export class RolesController {

    constructor(private RolesService: RolesService) {}

    @ApiOperation({summary: 'Створення нової ролі'})
    @ApiResponse({status: 201, type: Post})
    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto) {
        return this.RolesService.createRole(createRoleDto)
    }

    @ApiOperation({summary: 'Отримання ролі за унікальним значенням'})
    @ApiResponse({status: 200, type: Post})
    @Get(':value')
    getRole(@Param(':value') value: string) {
        return this.RolesService.getRole(value)
    }
}
