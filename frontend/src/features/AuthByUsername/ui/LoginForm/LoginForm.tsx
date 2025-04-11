import { classNames } from '../../../../shared/helpers/classNames/classNames'
import cls from './styles/LoginForm.module.scss'
import BaseButton, { BaseButtonSize, BaseButtonTheme } from '../../../../shared/ui/Buttons/BaseButton/BaseButton'
import InputTerminalStyle from '../../../../shared/ui/InputTerminalStyle/ui/InputTerminalStyle'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../slice/authSlice'
import { authSelectorState } from '../../selectors/authSelectorState'
import { loginByUsername } from '../../services/loginByUsername'
import { UnknownAction } from '@reduxjs/toolkit'
import Text, { TextTheme } from '../../../../shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(authSelectorState)
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(authActions.setUsername(value))
        },
        [dispatch],
    )
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(authActions.setPassword(value))
        },
        [dispatch],
    )
    const onAuthClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }) as unknown as UnknownAction)
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            {error && <Text title={error.message} theme={TextTheme.ERROR} text={'Ошибка авторизации'} />}
            <InputTerminalStyle
                className={cls.loginInput}
                onChange={onChangeUsername}
                value={username}
                isLabel={true}
                labelTxt='Имя пользователя'
                inputName='userName'
                placeholder={'Введите имя'}
                autofocus
            />
            <InputTerminalStyle
                className={cls.loginInput}
                onChange={onChangePassword}
                value={password}
                isLabel={true}
                labelTxt='Пароль'
                inputName='password'
                placeholder={'Введите пароль'}
            />
            <BaseButton
                theme={BaseButtonTheme.OUTLINE}
                disabled={isLoading}
                className={cls.loginBtn}
                size={BaseButtonSize.M}
                onClick={onAuthClick}
            >
                Войти
            </BaseButton>
        </div>
    )
})
