import classes from './App.module.css'
import MainThemeProvider from './providers/MainThemeProvider/ui/MainThemeProvider'
import MainNavbar from '../widgets/MainNavbar'

const App = () => {
    return (
        <div className={classes.app}>
            <MainThemeProvider>
                <MainNavbar />
            </MainThemeProvider>
        </div>
    )
}

export default App
