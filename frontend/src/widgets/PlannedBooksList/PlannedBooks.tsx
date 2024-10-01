import React from 'react'
import ItemList from '../../entites/ItemsList'
import useGetRequest from '../../shared/hooks/useGetRequest'
import { _basePostsUrl } from '../../../api/urls'
import { getAllPosts } from '../../../api/api'
import UpdateRecordsList from '../UpdateRecordsList/UpdateRecordsList'

const PlannedBooks = () => {
    const { data, loaded, error } = useGetRequest(_basePostsUrl, getAllPosts)
    return (
        <>
            <ItemList data={data} loaded={loaded} error={error} />
            <UpdateRecordsList data={data} loaded={loaded} error={error}  />
        </>
    )
}

export default PlannedBooks
