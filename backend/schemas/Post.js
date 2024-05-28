import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const Post = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	content: { type: String },
	image: { type: String },
})

export default mongoose.model('Post', Post)