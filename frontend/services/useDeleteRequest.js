import React, { useState } from 'react'

const useDeleteRequest = (data, url, fn) => {
	const [deleted, setDeleted] = useState('')
	const [currentData, setCurrentData] = useState(data)
	const [error, setError] = useState('')
	const onHandleDelete = (id) => {
		fn(url, id).
			then(res => {
				setDeleted(res)
				setCurrentData(data.filter(el => el.id !== id))
			}).
			catch(er => setError(er))
	}
	return { onHandleDelete, currentData, deleted, error }
}

export default useDeleteRequest