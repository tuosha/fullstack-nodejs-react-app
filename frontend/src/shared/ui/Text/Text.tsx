import { classNames } from '../../helpers/classNames/classNames'
import cls from './styles/Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

const Text = memo(({ className, title, text, theme = TextTheme.NORMAL }: TextProps) => {
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})

export default Text
