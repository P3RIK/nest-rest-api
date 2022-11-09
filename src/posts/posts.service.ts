import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post) {}

    async getAllPosts() {
        const posts = await this.postRepository.findAll()
        return posts
    }

    async getPostById(id) {
        const post = await this.postRepository.findByPk(id)
        return post
    }

    async createPost(dto: CreatePostDto) {
        try {
            const post = await this.postRepository.create(dto)
            return post
        } catch (e) {
            console.log(e)
        }
    }

}
