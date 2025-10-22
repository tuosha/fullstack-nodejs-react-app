import cls from './styles/SidebarItem.module.scss'
import AppLink from '../../../../shared/ui/AppLink/AppLink'
import { SideBarItemsListType } from '../../model/items'
import { classNames } from '../../../../shared/helpers/classNames/classNames'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface SidebarItemProps {
    item: SideBarItemsListType
    collapsed: boolean
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebarTrs')
    return (
        <AppLink to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            {item.icon ? <item.icon className={cls.icon} /> : ''}
            <span className={cls.text}>{t(item.text)}</span>
        </AppLink>
    )
})

export default SidebarItem
