import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { ApiProperty } from '@nestjs/swagger';

interface PostCreationAttrs {
    userID: number;
    text: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'ID публікації'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1', description: 'ID автора'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    authorID: number;

    @ApiProperty({example: 'Якийсь текст...', description: 'Текст публікації'})
    @Column({type: DataType.STRING, allowNull: false})
    text: string;

    @BelongsTo(() => User, 'authorID')
    user: User;
}