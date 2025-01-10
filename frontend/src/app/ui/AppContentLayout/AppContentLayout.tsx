import { Outlet } from 'react-router-dom'
import cls from '../../styles/App.module.scss'
import MainNavbar from '../../../widgets/MainNavbar'
import Sidebar from '../../../widgets/Sidebar'
import { classNames } from '../../../shared/helpers/classNames'
import { useTheme } from '../../providers/MainThemeProvider'
import MainThemeProvider from '../../providers/MainThemeProvider/ui/MainThemeProvider'
import { ReactNode, Suspense } from 'react'

interface IAppContentLayout {
    children?: ReactNode
}

const AppContentLayout = ({ children }: IAppContentLayout) => {
    const { theme } = useTheme()
    return (
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
    )
}

export default AppContentLayout
