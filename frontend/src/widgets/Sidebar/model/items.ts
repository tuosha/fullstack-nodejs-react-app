import { FunctionComponent, SVGAttributes } from 'react'
import Profile from '../../../shared/assets/icons/profiles/profiles.svg'
import Home from '../../../shared/assets/icons/home/home.svg'

export type SideBarItemsListType = {
    path: string
    text: string
    icon?: FunctionComponent<SVGAttributes<SVGElement>>
}

export const SideBarItemsList: SideBarItemsListType[] = [
    {
        path: '/',
        text: 'Главная',
        icon: Home,
    },
    {
        path: '/profile',
        text: 'Профиль',
        icon: Profile,
    },
]
