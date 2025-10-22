import cls from './styles/MainNavbar.module.scss'
import { classNames } from '../../../shared/helpers/classNames/classNames'
import AppLink from '../../../shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

const MainNavbar = memo(() => {
    const { t } = useTranslation('mainNavbarTrs')
    return (
        <div className={classNames(cls.mainNavbar, {}, [])}>
            <AppLink to={'/planned-books'}> {t('Запланированые книги')}</AppLink>
            <AppLink to={'/planned-books'}>{t('Запланированные фильмы')}</AppLink>
            <AppLink to={'/add-book-form'}>{t('Добавить книгу')}</AppLink>
            <AppLink to={'/planned-books'}>{t('Прочитанные книги')}</AppLink>
            <AppLink to={'/planned-books'}>{t('Просмотренные фильмы')}</AppLink>
        </div>
    )
})

export default MainNavbar
