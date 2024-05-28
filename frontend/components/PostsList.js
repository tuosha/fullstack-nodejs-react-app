import React from 'react'
import ItemList from './ItemsList'
import useGetRequest from '../services/useGetRequest'
import { _basePostsUrl } from '../api/urls'
import { getAllPosts } from '../api/api'

const PostsList = () => {
	const { data, loaded, error } = useGetRequest(_basePostsUrl, getAllPosts)
	return <ItemList
		data={data}
		loaded={loaded}
		error={error}
	/>

}

export default PostsList