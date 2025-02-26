import { classNames } from '../../../shared/helpers/classNames'
import cls from '../styles/AuthSwitcher.module.scss'
import AuthIcon from '../../../shared/assets/icons/authorization/shield-user-icon.svg'
import BaseButton, { BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import Modal from '../../../shared/ui/Modal/Modal'
import React, { useState } from 'react'

interface AuthSwitcherProps {
    className?: string
}

const AuthSwitcher = ({ className }: AuthSwitcherProps) => {
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
            <Modal isOpen={isOpen} onClose={() => toggleOpen(false)}>
                Много текста много текта много кекса
            </Modal>
        </>
    )
}

export default AuthSwitcher
