import axios from 'axios'

const sendPost = async (url, data) => {
	return await axios.post(url, {
		data: data,
	})
}

const getAllPosts = async (url) => {
	const res = await axios.get(url)
	if (res.status !== 200) {
		throw new Error(
			'Can\'t get data from server: ' + res.status + ' ' + res.statusText)
	}
	return res.data
}

const deletePost = async (url, id) => {
	const res = await axios.delete(url + '/' + id)
	if (res.status !== 200) {
		throw new Error(
			'Can\'t get data from server: ' + res.status + ' ' + res.statusText)
	}
	return res.data
}

export {
	sendPost,
	getAllPosts,
	deletePost
}
