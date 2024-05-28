import PostServices from '../services/PostServices.js'

class PostController {
	static async create (req, res) {
		try {
			const post = await PostServices.create(req.body, req.files.picture)
			return res.json(post)
		}
		catch (err) {
			console.log(res.status(500).json(err.message))
		}
	}

	static async getAllPost (req, res) {
		try {
			const posts = await PostServices.getAllPost()
			return res.json(posts)
		}
		catch (err) {
			console.log(res.status(500).json(err.message))
		}
	}

	static async getPost (req, res) {
		try {
			const post = await PostServices.getPost(req.params.id)
			return res.json(post)
		}
		catch (err) {
			console.log(res.status(500).json(err.message))
		}
	}

	static async updatePost (req, res) {
		try {
			const updatedPost = await PostServices.updatePost(req.body)
			return res.json(updatedPost)
		}
		catch (err) {
			console.log(res.status(500).json(err.message))
		}
	}

	static async deletePost (req, res) {
		try {
			const post = await PostServices.deletePost(req.params.id)
			return res.json(post)
		}
		catch (err) {
			console.log(res.status(500).json(err.message))
		}
	}
}

export default PostController