import AppRouterProvider from './providers/RouterProvider'
import classes from './App.module.css'

const App = () => {
    return (
        <div className={classes.app}>
            <AppRouterProvider />
        </div>
    )
}

export default App
