import { classNames } from '../../../helpers/classNames'
import cls from './styles/BaseButton.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export const enum BaseButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum BaseButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl',
}

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: BaseButtonTheme
    primary?: boolean
    backgroundColor?: string
    size?: string
    square?: boolean
    onClick?: () => void
}

const BaseButton: FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const { className, theme, children, size = BaseButtonSize.L, square, ...otherProps } = props
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    }

    return (
        <button type='button' className={classNames(cls.baseButton, mods, [className])} {...otherProps}>
            {children}
        </button>
    )
}

export default BaseButton
