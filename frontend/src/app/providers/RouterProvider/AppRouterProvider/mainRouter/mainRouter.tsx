import { createBrowserRouter } from 'react-router-dom'
import RouterErrorPage from '../../../../../widgets/RouterErrorPage/RouterErrorPage'
import App from '../../../../App'

const routerOptions = {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
    },
}
const roots = [
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
]

const mainRouter = createBrowserRouter(roots, routerOptions)

export default mainRouter
