import mainRouter from './mainRouter/mainRouter'
import { RouterProvider } from 'react-router-dom'

const AppRouterProvider = () => <RouterProvider router={mainRouter} />

export default AppRouterProvider
