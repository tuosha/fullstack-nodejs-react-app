import { createBrowserRouter } from 'react-router-dom'
import MainNavbar from '../../../../widgets/MainNavbar/ui/MainNavbar'

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainNavbar />,
        children: [
            {
                path: '/planned-books',
                lazy: async () => {
                    const PlannedBooks = (await import('../../../../widgets/PlannedBooksList/PlannedBooks')).default
                    return {
                        element: <PlannedBooks />,
                    }
                },
            },
            {
                path: '/add-book-form',
                lazy: async () => {
                    const AddBookForm = (await import('../../../../widgets/AddBookForm/AddBookForm')).default
                    return {
                        element: <AddBookForm />,
                    }
                },
            },
        ],
    },
])

export default mainRouter
