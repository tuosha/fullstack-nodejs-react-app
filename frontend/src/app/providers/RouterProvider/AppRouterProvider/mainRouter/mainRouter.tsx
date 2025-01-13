import { createBrowserRouter } from 'react-router-dom'
import RouterErrorPage from '../../../../../widgets/RouterErrorPage/RouterErrorPage'
import App from '../../../../App'

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: (
            <App>
                <RouterErrorPage />
            </App>
        ),
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
