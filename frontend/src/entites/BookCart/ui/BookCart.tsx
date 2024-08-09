import {BookCartTypes} from "../types/BookCartTypes";

const BookCart = ({item, onHandleDelete}: BookCartTypes) => {
    return (
        <li key={item._id}>
            <span>Title: {item.title} </span>
            <span>Author: {item.author}</span>
            <button onClick={() => onHandleDelete(item._id)}>Delete</button>
        </li>
    )
}

export default BookCart