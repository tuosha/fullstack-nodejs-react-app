import {useState} from 'react'

type TDeleteRequest = (url: string, id: string) => Promise<object>
type TDeletedElement = { id: string }

const useDeleteRequest = (data: Array<object>, url: string, fn: TDeleteRequest) => {
    const [deleted, setDeleted] = useState<string | object>('')
    const [currentData, setCurrentData] = useState(data)
    const [onDeleteError, setError] = useState('')
    const onHandleDelete = (id: string) => {
        fn(url, id).then((res) => {
            setDeleted(res)
            setCurrentData(data.filter((el: TDeletedElement) => el.id !== id))
        }).catch(er => setError(er))
    }
    return {onHandleDelete, currentData, deleted, onDeleteError}
}

export default useDeleteRequest