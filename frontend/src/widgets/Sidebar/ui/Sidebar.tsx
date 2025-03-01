import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from './styles/Sidebar.module.scss'
import React, { useState } from 'react'
import BaseButton, { BaseButtonSize, BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher'
import LangSwitcher from '../../LangSwitcher/ui/LangSwitcher'
import AuthSwitcher from '../../AuthSwitcher/ui/AuthSwitcher'
import { Counter } from '../../../entites/Counter'

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const setVisible = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Counter />
            <BaseButton
                className={cls.collapseBtn}
                onClick={setVisible}
                theme={BaseButtonTheme.BACKGROUND}
                square={true}
                size={BaseButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </BaseButton>
            <div className={cls.switchers}>
                <AuthSwitcher />
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default Sidebar
