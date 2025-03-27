import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from './styles/LoginForm.module.scss'
import BaseButton, { BaseButtonSize } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import InputTerminalStyle from '../../../shared/ui/InputTerminalStyle/ui/InputTerminalStyle'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <InputTerminalStyle
                className={cls.loginInput}
                isLabel={true}
                labelTxt='Имя пользователя'
                inputName='userName'
                placeholder={'Введите имя'}
                autofocus
            />
            <InputTerminalStyle
                className={cls.loginInput}
                isLabel={true}
                labelTxt='Пароль'
                inputName='password'
                placeholder={'Введите пароль'}
            />
            <BaseButton className={cls.loginBtn} size={BaseButtonSize.M}>
                Войти
            </BaseButton>
        </div>
    )
}
