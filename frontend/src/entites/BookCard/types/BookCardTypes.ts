interface BookCardTypes {
    item: {
        _id: string
        title: string
        author: string
    }
    onHandleDelete: (id: string) => void
}

export { BookCardTypes }
