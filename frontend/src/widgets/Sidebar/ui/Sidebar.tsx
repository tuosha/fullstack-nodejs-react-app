import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from './styles/Sidebar.module.scss'
import { useState } from 'react'
import BaseButton, { BaseButtonSize, BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher'
import LangSwitcher from '../../LangSwitcher/ui/LangSwitcher'
import AuthSwitcher from '../../AuthSwitcher/ui/AuthSwitcher'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from '../../../entites/User'
import Text from '../../../shared/ui/Text/Text'

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const setVisible = () => {
        setCollapsed((prev) => !prev)
    }
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()
    const logout = () => dispatch(userActions.logoutAuth())
    const authorized = authData ? (
        <>
            {<Text title={`Привет, ${authData.username}`} text={`Привет, ${authData.username}`} />}
            <BaseButton onClick={logout} theme={BaseButtonTheme.BACKGROUND} square={true} size={BaseButtonSize.M}>
                Выйти
            </BaseButton>
        </>
    ) : (
        <AuthSwitcher />
    )

    return (
        <div data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
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
                {authorized}
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default Sidebar
