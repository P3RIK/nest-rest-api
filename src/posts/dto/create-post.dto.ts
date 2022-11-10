import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {

    @ApiProperty({example: '1', description: 'ID автора'})
    readonly authorID: number;

    @ApiProperty({example: 'Якийсь текст...', description: 'Текст посту'})
    readonly text: string;
}