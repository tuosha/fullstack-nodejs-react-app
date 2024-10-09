import React, { FC, useEffect, useState } from 'react'

interface IDataPropsTypes {
    data: object[]
    loaded: boolean
    error: string
}

interface IConfigItem {
    Item: React.FC<{ item: object }>
}

type TItemList = IDataPropsTypes & IConfigItem

const ItemList: FC<TItemList> = ({ data, loaded, error, Item }) => {
    const [currentData, setData] = useState([])
    useEffect(() => setData(data), [data])
    const list =
        loaded &&
        !error &&
        (currentData.length ? (
            <ul>
                {currentData.map((el) => (
                    <Item key={el._id} item={el} />
                ))}
            </ul>
        ) : (
            <p>No posts!</p>
        ))
    return (
        <>
            {list}
            {!loaded && <p>...loading</p>}
            {error && <p>Can`&apos`t get data from server, error is: {error}</p>}
        </>
    )
}

export default ItemList
