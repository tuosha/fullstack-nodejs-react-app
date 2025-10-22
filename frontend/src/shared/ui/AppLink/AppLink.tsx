import { classNames } from '../../helpers/classNames/classNames'
import cls from './styles/AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { memo } from 'react'

interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children } = props
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className])}>
            {children}
        </Link>
    )
})

export default AppLink
