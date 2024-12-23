import cls from './styles/MainNavbar.module.scss'
import useTheme from '../../../app/providers/MainThemeProvider/lib/useTheme'
import { classNames } from '../../../shared/helpers/classNames'
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher'
import AppLink from '../../../shared/ui/AppLink/AppLink'
import LangSwitcher from '../../LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'

const MainNavbar = () => {
    const { theme } = useTheme()
    const { t } = useTranslation('mainNavbarTrs')
    return (
        <div className={classNames(cls.mainNavbar, {}, [theme])}>
            <AppLink to={'/planned-books'}>{t('Запланированые книги')}</AppLink>
            <AppLink to={'/planned-books'}>{t('Запланированные фильмы')}</AppLink>
            <AppLink to={'/add-book-form'}>{t('Добавить книгу')}</AppLink>
            <AppLink to={'/planned-books'}>{t('Прочитанные книги')}</AppLink>
            <AppLink to={'/planned-books'}>{t('Просмотренные фильмы')}</AppLink>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    )
}

export default MainNavbar
