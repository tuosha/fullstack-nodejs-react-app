import { useTheme } from './providers/MainThemeProvider'
import React, { Suspense } from 'react'
import { classNames } from '../shared/helpers/classNames'
import cls from './styles/App.module.scss'
import MainNavbar from '../widgets/MainNavbar'
import Sidebar from '../widgets/Sidebar'
import { Outlet } from 'react-router-dom'
import { IAppContentLayout } from './types/AppTypes'
import ErrorBoundary from './providers/ErrorBoundary'
import './styles/index.scss'

const App = ({ children }: IAppContentLayout) => {
    const { theme } = useTheme()
    return (
        <ErrorBoundary>
            <Suspense fallback='loading...'>
                <div className={classNames('app', {}, [theme])}>
                    <MainNavbar />
                    <div className={cls.appComponentWrapper}>
                        <Sidebar />
                        <div className={cls.appContentPage}>{children ?? <Outlet />}</div>
                    </div>
                </div>
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
