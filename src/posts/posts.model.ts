import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';

interface PostCreationAttrs {
    userID: number;
    text: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    postID: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userID: number;

    @Column({type: DataType.STRING, allowNull: false})
    text: string;

    @BelongsTo(() => User, 'userID')
    user: User;
}