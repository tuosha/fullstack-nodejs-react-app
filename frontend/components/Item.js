import React from 'react'

const Item = ({item, onHandleDelete}) => {
	return (
			<li key={item._id}>
				<span>Title: {item.title} </span>
				<span>Author: {item.author}</span>
				<button onClick={() => onHandleDelete(item._id)}>Delete</button>
			</li>
	)
}

export default Item