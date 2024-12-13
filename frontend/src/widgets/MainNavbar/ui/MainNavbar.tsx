import { Outlet } from 'react-router-dom'
import classes from './styles/MainNavbar.module.scss'
import useTheme from '../../../app/providers/MainThemeProvider/lib/useTheme'
import { classNames } from '../../../shared/helpers/classNames'
import ThemeSwitcher from '../../../shared/ui/ThemeSwitcher/ThemeSwitcher'
import AppLink from '../../../shared/ui/AppLink/AppLink'

const MainNavbar = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames(classes.mainNavbar, {}, [theme])}>
            <AppLink to={'/planned-books'}>Planned Books</AppLink>
            <AppLink to={'/add-book-form'}>Add book</AppLink>
            <ThemeSwitcher className={'switcher'} />
            <Outlet />
        </div>
    )
}

export default MainNavbar
