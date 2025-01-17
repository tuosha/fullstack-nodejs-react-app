import { classNames } from '../../../shared/helpers/classNames'
import cls from './styles/Sidebar.module.scss'
import { useState } from 'react'
import BaseButton, { BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher'
import LangSwitcher from '../../LangSwitcher/ui/LangSwitcher'

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
            <BaseButton onClick={setVisible} theme={BaseButtonTheme.CLEAR}>
                toggle
            </BaseButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default Sidebar
