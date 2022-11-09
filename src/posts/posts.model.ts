import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface PostCreationAttrs {
    userID: number;
    text: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    postID: number;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    userID: number;

    @Column({type: DataType.STRING, allowNull: false})
    text: string;
}