interface ItemProps {
    item: {
        _id: string
        title: string
        author: string
    }
    onHandleDelete: (id: string) => void
}

const Item = ({ item, onHandleDelete }: ItemProps) => {
    return (
        <li key={item._id}>
            <span>Title: {item.title} </span>
            <span>Author: {item.author}</span>
            <button onClick={() => onHandleDelete(item._id)}>Delete</button>
        </li>
    )
}

export default Item
