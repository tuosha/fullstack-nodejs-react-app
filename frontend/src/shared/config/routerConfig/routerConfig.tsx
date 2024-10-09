import { RouteProps } from 'react-router-dom'
import PlannedBooks from '../../../widgets/PlannedBooksList/PlannedBooks'
import AddBookForm from '../../../widgets/AddBookForm/AddBookForm'

export enum AppRoutes {
    PLANNEDBOOKS = 'plannedBooks',
    ADDBOOKFORM = 'addBook',
}

export const routesPaths: Record<AppRoutes, string> = {
    [AppRoutes.PLANNEDBOOKS]: '/planned-books',
    [AppRoutes.ADDBOOKFORM]: '/add-book',
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.PLANNEDBOOKS]: {
        path: routesPaths.plannedBooks,
        element: <PlannedBooks />,
    },
    [AppRoutes.ADDBOOKFORM]: {
        path: routesPaths.addBook,
        element: <AddBookForm />,
    },
}
