import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Role } from './roles.model';

@Table({tableName: 'user_roles', timestamps: false})
export class UserRoles extends Model<UserRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    userID: string;

    @ForeignKey(() => Role)
    @Column({type: DataType.STRING, allowNull: false})
    roleID: string;

}