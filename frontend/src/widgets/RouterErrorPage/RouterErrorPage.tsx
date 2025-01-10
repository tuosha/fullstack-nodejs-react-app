import { classNames } from '../../shared/helpers/classNames'
import cls from './styles/RouterErrorPage.module.scss'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ErrorPageProps {
    className?: string
}

const RouterErrorPage = ({ className }: ErrorPageProps) => {
    const error = useRouteError()
    const { t } = useTranslation()
    if (isRouteErrorResponse(error)) {
        return (
            <div className={classNames(cls.routerErrorPage, {}, [className])}>
                <h3>{t('Что-то пошло не так...')}</h3>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                <p>{error.data?.message && <p>{error.data.message}</p>}</p>
            </div>
        )
    }
}

export default RouterErrorPage
