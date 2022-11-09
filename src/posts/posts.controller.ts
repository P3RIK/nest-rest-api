import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    getAllPosts() {
        return this.postsService.getAllPosts()
    }

    @Get(':id')
    getPostById(@Param('postID') id: number) {
        return this.postsService.getPostById(id)
    }

    @Post()
    createPost(@Body() postDto: CreatePostDto) {
        return this.postsService.createPost(postDto)
    }
}
