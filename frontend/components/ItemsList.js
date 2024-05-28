import { deletePost } from '../api/api'
import { _basePostsUrl } from '../api/urls'
import { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({data, loaded, error}) => {
	const [currentData, setData] = useState([])
	const [deleted, setDeleted] = useState('')
	useEffect(() => setData(data),[data])
	const onHandleDelete = (id) => {
		deletePost(_basePostsUrl, id).
			then(res => {
				setData(currentData.filter(el => el._id !== id))
				setDeleted(res)
				onDeleteMsg(res)
			}).
			catch(er => er)
	}
	const onDeleteMsg = (deleted) => {
		console.log(deleted)
	}
	const list = loaded && !error && (currentData.length ?
	             <ul>{currentData.map(el =>
					<Item key={el._id}
						item={el}
						onHandleDelete={onHandleDelete}
					/>)}
				 </ul> :
	             <p>No posts!</p>)
	return (
		<>
			{list}
			{!loaded && <p>...loading</p>}
			{error && <p>Can't get data from server, error is: {error}</p>}
		</>
	)
}

export default ItemList