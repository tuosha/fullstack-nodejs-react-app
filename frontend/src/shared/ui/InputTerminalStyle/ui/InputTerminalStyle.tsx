import cls from '../styles/InputTerminalStyle.module.scss'
import { SyntheticEvent, useState } from 'react'
import { InputProps } from '../../Input/ui/Input'
import Input from '../../Input'
import { classNames } from '../../../helpers/classNames/classNames'

const InputTerminalStyle = (props: InputProps) => {
    const { className, placeholder, isLabel, labelTxt, autofocus } = props
    const [caretPosition, setCaretPosition] = useState(0)
    const [isFocus, setFocus] = useState(false)
    const onFocus = () => {
        setFocus(true)
    }
    const onBlur = () => {
        setFocus(false)
    }
    const onSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
        const target = e?.target as HTMLInputElement
        setCaretPosition(target?.selectionStart || 0)
    }
    return (
        <div className={cls.caretWrapper}>
            <Input
                className={classNames(cls.inputTerminal, {}, [className])}
                placeholder={placeholder}
                isLabel={isLabel}
                labelTxt={labelTxt}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                autoFocus={autofocus}
            />
            {isFocus && <span className={cls.caret} style={{ left: `${caretPosition * 7.5}px` }}></span>}
        </div>
    )
}

export default InputTerminalStyle
