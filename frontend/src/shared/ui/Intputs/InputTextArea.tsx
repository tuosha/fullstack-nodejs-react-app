import { InputTextAreaProps } from '../../types/InputsTypes'
import { defaultInputTextAreaProps } from './defaultValues/defaultValues'
import { FC } from 'react'

const InputTextArea: FC<InputTextAreaProps> = ({ options }: InputTextAreaProps) => {
    options = { ...defaultInputTextAreaProps.options, ...options }
    const {
        id,
        isLabel,
        labelTitle,
        labelClassName,
        inputGroupClassName,
        textAreaClassName,
        placeHolder,
        ariaLabel,
        rows,
    } = options
    const label = isLabel ? (
        <label className={labelClassName} htmlFor={id}>
            {labelTitle}
        </label>
    ) : (
        ''
    )
    return (
        <>
            {label}
            <div className={inputGroupClassName}>
                <textarea
                    className={textAreaClassName}
                    id={id}
                    placeholder={placeHolder}
                    aria-label={ariaLabel}
                    rows={rows}
                />
            </div>
        </>
    )
}

export default InputTextArea
