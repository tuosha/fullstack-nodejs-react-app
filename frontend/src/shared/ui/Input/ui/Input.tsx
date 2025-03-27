import { classNames } from '../../../helpers/classNames/classNames'
import cls from '../styles/Input.module.scss'
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    type?: string
    otherProps?: string
    isLabel?: boolean
    labelTxt?: string
    inputName?: string
    placeHolder?: string
    autofocus?: boolean
}

const Input = memo(function Input(props: InputProps) {
    const {
        className,
        value,
        type = 'text',
        onChange,
        isLabel = false,
        labelTxt,
        inputName,
        placeHolder = '',
        autofocus,
        ...otherProps
    } = props
    const inputRef = useRef<HTMLInputElement>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus()
        }
    }, [autofocus])
    return (
        <div className={cls.inputWrapper}>
            {isLabel && <label htmlFor={inputName}>{labelTxt}</label>}
            {placeHolder && <div className={cls.placeholder}>{placeHolder}</div>}
            <input
                ref={inputRef}
                className={classNames(cls.input, {}, [className])}
                value={value}
                type={type}
                onChange={onChangeHandler}
                autoFocus={autofocus}
                {...otherProps}
            />
        </div>
    )
})

export default Input
