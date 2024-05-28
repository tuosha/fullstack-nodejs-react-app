import Post from '../schemas/Post.js'
import FileServices from './FileServices.js'

class PostServices {
	static create = async (post, file) => {
		const fileName = FileServices.saveFile(file)
		await Post.create({ ...post, picture: fileName})
	}

	static getAllPost = async() => await Post.find()

	static getPost = async (id)  => {
		if (!id) throw new Error('No such id')
		return Post.findById(id)
	}

	static updatePost = async (post) => {
		if (!post._id) throw new Error ('No such id')
		return Post.findByIdAndUpdate(post._id, post, { new: true })
	}

	static deletePost = async (id) => {
		if (!id) throw new Error ('No such id')
		return Post.findByIdAndDelete(id)
	}
}

export default PostServices