import {deletePost} from '../../api/api'
import {_basePostsUrl} from '../../api/urls'
import {useEffect, useState} from 'react'
import Item from './Item'

interface GetDataPropsTypes {
    data: object[],
    loaded: boolean,
    error: string,
}

const ItemList = ({data, loaded, error}: GetDataPropsTypes) => {
    const [currentData, setData] = useState([])
    const [deleted, setDeleted] = useState<object>({})
    useEffect(() => setData(data), [data])
    const onHandleDelete = (id: string) => {
        deletePost(_basePostsUrl, id).
            then(res => {
                setData(currentData.filter(el => el._id !== id))
                setDeleted(res)
            }).
            catch(er => er)
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
            {error && <p>Can`&apos`t get data from server, error is: {error}</p>}
        </>
    )
}

export default ItemList