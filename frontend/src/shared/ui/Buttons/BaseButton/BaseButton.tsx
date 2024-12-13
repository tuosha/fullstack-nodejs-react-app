import { classNames } from '../../../helpers/classNames'
import cls from './styles/BaseButton.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export const enum BaseButtonTheme {
    CLEAR = 'clear',
}

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: BaseButtonTheme
}

const BaseButton: FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const { className, theme, children, ...otherProps } = props
    return (
        <button className={classNames(cls.BaseButton, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}

export default BaseButton
