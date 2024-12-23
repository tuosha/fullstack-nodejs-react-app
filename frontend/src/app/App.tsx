import cls from './styles/App.module.scss'
import MainThemeProvider from './providers/MainThemeProvider/ui/MainThemeProvider'
import MainNavbar from '../widgets/MainNavbar'
import Sidebar from '../widgets/Sidebar'
import { Outlet } from 'react-router-dom'
import { classNames } from '../shared/helpers/classNames'
import { useTheme } from './providers/MainThemeProvider'
import { Suspense } from 'react'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames(cls.app, {}, [theme])}>
            <Suspense fallback='loading...'>
                <MainThemeProvider>
                    <MainNavbar />
                    <div className={cls.appComponentWrapper}>
                        <Sidebar />
                        <div className={cls.appContentPage}>
                            <Outlet />
                        </div>
                    </div>
                </MainThemeProvider>
            </Suspense>
        </div>
    )
}

export default App
