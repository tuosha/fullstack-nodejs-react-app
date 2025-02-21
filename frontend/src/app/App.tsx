import { useTheme } from './providers/MainThemeProvider'
import React, { Suspense, useState } from 'react'
import { classNames } from '../shared/helpers/classNames'
import cls from './styles/App.module.scss'
import MainNavbar from '../widgets/MainNavbar'
import Sidebar from '../widgets/Sidebar'
import { Outlet } from 'react-router-dom'
import { IAppContentLayout } from './types/AppTypes'
import ErrorBoundary from './providers/ErrorBoundary'
import './styles/index.scss'
import PageLoader from '../shared/ui/PageLoader/PageLoader'
import Modal from '../shared/ui/Modal/Modal'

const App = ({ children }: IAppContentLayout) => {
    const { theme } = useTheme()
    const [isOpen, toggleOpen] = useState(false)
    return (
        <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
                <div className={classNames('app', {}, [theme])}>
                    <Modal isOpen={isOpen} onClose={() => toggleOpen(false)}>
                        Много текста много текта много кекса
                    </Modal>
                    <button onClick={() => toggleOpen(!isOpen)}>Open Modal</button>
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
