import { classNames } from '../../../shared/helpers/classNames'
import cls from './styles/Sidebar.module.scss'
import { useState } from 'react'
import BaseButton, { BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const setVisible = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <BaseButton onClick={setVisible} theme={BaseButtonTheme.CLEAR}>
                toggle
            </BaseButton>
        </div>
    )
}

export default Sidebar
