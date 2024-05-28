import { Router } from 'express'
import PostController from '../controllers/PostController.js'

const postsRouter = new Router()

postsRouter.post('/posts', PostController.create)
postsRouter.get('/posts', PostController.getAllPost)
postsRouter.get('/posts/:id', PostController.getPost)
postsRouter.put('/posts', PostController.updatePost)
postsRouter.delete('/posts/:id', PostController.deletePost)


export default postsRouter