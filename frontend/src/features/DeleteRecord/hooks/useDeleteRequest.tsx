import { useState } from 'react'

type DeleteRequestFnType = (url: string, id: string) => Promise<object>
type DeletedElementType = { id: string }

const useDeleteRequest = (data: Array<object>, url: string, fn: DeleteRequestFnType) => {
    const [deleted, setDeleted] = useState<string | object>('')
    const [currentData, setCurrentData] = useState(data)
    const [onDeleteError, setError] = useState('')
    const onHandleDelete = (id: string) => {
        fn(url, id)
            .then((res) => {
                setDeleted(res)
                setCurrentData(data.filter((el: DeletedElementType) => el.id !== id))
            })
            .catch((er) => setError(er))
    }
    return { onHandleDelete, currentData, deleted, onDeleteError }
}

export default useDeleteRequest
