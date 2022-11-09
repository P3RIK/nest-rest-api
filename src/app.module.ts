import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { Post } from './posts/posts.model';

@Module({
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASS,
            database: process.env.POSTGRES_DBNAME,
            models: [User, Post],
            autoLoadModels: true
        }),
        UsersModule,
        PostsModule]
})
export class AppModule {}
