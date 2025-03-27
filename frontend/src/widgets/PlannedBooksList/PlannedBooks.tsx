import React from 'react'
import ItemList from '../../entites/ItemsList/ItemsList'
import useGetRequest from '../../shared/hooks/useGetRequest/useGetRequest'
import { _baseGetPostsUrl } from '../../../api/urls'
import { getAllPosts } from '../../../api/api'
import BookCard from '../../entites/BookCard/ui/BookCard'

const PlannedBooks = () => {
    const { data, loaded, error } = useGetRequest(_baseGetPostsUrl, getAllPosts)
    return (
        <>
            <ItemList data={data} loaded={loaded} error={error} Item={BookCard} />
        </>
    )
}

export default PlannedBooks
