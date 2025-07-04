import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from '../styles/AuthSwitcher.module.scss'
import AuthIcon from '../../../shared/assets/icons/authorization/shield-user-icon.svg'
import BaseButton, { BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import React, { memo, useState } from 'react'
import { LoginModal } from '../../../features/AuthByUsername'

interface AuthSwitcherProps {
    className?: string
}

const AuthSwitcher = memo(({ className }: AuthSwitcherProps) => {
    const [isOpen, toggleOpen] = useState(false)
    return (
        <>
            <BaseButton
                className={classNames(cls.authSwitcherBtn, {}, [className])}
                theme={BaseButtonTheme.CLEAR}
                onClick={() => toggleOpen(!isOpen)}
            >
                <AuthIcon />
            </BaseButton>
            {isOpen && <LoginModal isOpen={isOpen} onClose={() => toggleOpen(false)} />}
        </>
    )
})

export default AuthSwitcher
