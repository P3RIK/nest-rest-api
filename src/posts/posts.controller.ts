import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@ApiTags('Публікації')
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: 'Створення нового посту'})
    @ApiResponse({status: 201, type: Post})
    @Post()
    createPost(@Body() postDto: CreatePostDto) {
        return this.postsService.createPost(postDto)
    }
    @ApiOperation({summary: 'Отримання всіх постів'})
    @ApiResponse({status: 200, type: Post})
    @Get()
    getAllPosts() {
        return this.postsService.getAllPosts()
    }
    @ApiOperation({summary: 'Отримання посту за його ID'})
    @ApiResponse({status: 200, type: Post})
    @Get(':id')
    getPostById(@Param('id') id: number) {
        return this.postsService.getPostById(id)
    }
}
