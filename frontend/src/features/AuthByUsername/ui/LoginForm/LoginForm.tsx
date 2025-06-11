import { classNames } from '../../../../shared/helpers/classNames/classNames'
import cls from './styles/LoginForm.module.scss'
import BaseButton, { BaseButtonSize, BaseButtonTheme } from '../../../../shared/ui/Buttons/BaseButton/BaseButton'
import InputTerminalStyle from '../../../../shared/ui/InputTerminalStyle/ui/InputTerminalStyle'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { authActions, authReducer } from '../../slice/authSlice'
import { loginByUsername } from '../../services/loginByUsername'
import Text, { TextTheme } from '../../../../shared/ui/Text/Text'
import { userNameSelectorState } from '../../selectors/userNameSelectorState/userNameSelectorState'
import { passwordSelectorState } from '../../selectors/passwordSelectorState/passwordSelectorState'
import { isLoadingSelectorState } from '../../selectors/isLoadingSelectorState/isLoadingSelectorState'
import { errorSelectorState } from '../../selectors/errorSelectorState/errorSelectorState'
import DynamicModuleLoader, { ReducersNamesList } from '../../../../shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { useAppThunkDispatch } from '../../../../shared/hooks/useAppThunkDispatch/useAppThunkDispatch'

export interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const initReducers: ReducersNamesList = { authForm: authReducer }
    const dispatch = useAppDispatch()
    const thunkDispatch = useAppThunkDispatch()
    const username = useSelector(userNameSelectorState)
    const password = useSelector(passwordSelectorState)
    const isLoading = useSelector(isLoadingSelectorState)
    const error = useSelector(errorSelectorState)

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
    const onAuthClick = useCallback(async () => {
        // const result = dispatch(loginByUsername({ username, password }) as unknown as UnknownAction)
        const response = await thunkDispatch(loginByUsername({ username, password }))
        return response
    }, [thunkDispatch, username, password])

    return (
        <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
