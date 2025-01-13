import { useTheme } from './providers/MainThemeProvider'
import { ReactNode, Suspense } from 'react'
import MainThemeProvider from './providers/MainThemeProvider/ui/MainThemeProvider'
import { classNames } from '../shared/helpers/classNames'
import cls from './styles/App.module.scss'
import MainNavbar from '../widgets/MainNavbar'
import Sidebar from '../widgets/Sidebar'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from './providers/ErrorBoundary/ui/ErrorBoundary'

interface IAppContentLayout {
    children?: ReactNode
}

const App = ({ children }: IAppContentLayout) => {
    const { theme } = useTheme()
    return (
        <ErrorBoundary>
            <Suspense fallback='loading...'>
                <MainThemeProvider>
                    <div className={classNames(cls.app, {}, [theme])}>
                        <MainNavbar />
                        <div className={cls.appComponentWrapper}>
                            <Sidebar />
                            <div className={cls.appContentPage}>{children ?? <Outlet />}</div>
                        </div>
                    </div>
                </MainThemeProvider>
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
