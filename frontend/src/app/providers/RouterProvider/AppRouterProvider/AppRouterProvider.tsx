import mainRouter from './mainRouter/mainRouter'
import { RouterProvider } from 'react-router-dom'

const AppRouterProvider = () => (
    <RouterProvider
        future={{
            v7_startTransition: true,
        }}
        router={mainRouter}
    />
)

export default AppRouterProvider
