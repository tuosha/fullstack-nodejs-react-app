import React, { useCallback, useEffect, useState } from 'react'

const useGetRequest = (url, fn) => {
	const [data, setData] = useState([])
	const [error, setError] = useState('')
	const [loaded, setLoaded] = useState(false)
	const request = useCallback(async () =>
			await fn(url).
				then(res => {
					setData(res)
					data ? setLoaded(true) : setLoaded(false)
				}).
				catch(err => setError(err)),
		[])
	useEffect(() => {
		const sendRequest = () => request()
		sendRequest()
	}, [])
	return { data, loaded, error }
}

export default useGetRequest