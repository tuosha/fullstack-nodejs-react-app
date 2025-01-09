import { createBrowserRouter } from 'react-router-dom'
import App from '../../../../App'
import RouterErrorPage from '../../../../../widgets/RouterErrorPage/RouterErrorPage'

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                path: '/planned-books',
                lazy: async () => {
                    const PlannedBooks = (await import('../../../../../widgets/PlannedBooksList/PlannedBooks')).default
                    return {
                        element: <PlannedBooks />,
                    }
                },
            },
            {
                path: '/add-book-form',
                lazy: async () => {
                    const AddBookForm = (await import('../../../../../widgets/AddBookForm/AddBookForm')).default
                    return {
                        element: <AddBookForm />,
                    }
                },
            },
        ],
    },
])

export default mainRouter
