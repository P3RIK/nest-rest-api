import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty({example: 'yourname@email.com', description: 'Електронна пошта'})
    readonly email: string;

    //@ApiProperty({example: 'yournickname12345', description: 'Нікнейм користувача'})
    //readonly nickname: string;

    @ApiProperty({example: 'pass12345', description: 'Пароль'})
    readonly password: string;

}