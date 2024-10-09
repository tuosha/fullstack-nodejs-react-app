import React from 'react'

interface BookCardTypes {
    item: {
        _id: string
        title: string
        author: string
    }
}

const BookCard: React.FC<BookCardTypes> = ({ item }) => {
    return (
        <li key={item._id}>
            <span>Title: {item.title} </span>
            <span>Author: {item.author}</span>
        </li>
    )
}

export default BookCard
