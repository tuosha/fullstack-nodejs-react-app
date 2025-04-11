import { useTheme } from './providers/MainThemeProvider'
import React, { Suspense, useEffect } from 'react'
import { classNames } from '../shared/helpers/classNames/classNames'
import cls from './styles/App.module.scss'
import MainNavbar from '../widgets/MainNavbar'
import Sidebar from '../widgets/Sidebar'
import { Outlet } from 'react-router-dom'
import { IAppContentLayout } from './types/AppTypes'
import ErrorBoundary from './providers/ErrorBoundary'
import './styles/index.scss'
import PageLoader from '../shared/ui/PageLoader/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from '../entites/User'

const App = ({ children }: IAppContentLayout) => {
    const { theme } = useTheme()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
                <div className={classNames(cls.app, {}, [theme])}>
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
