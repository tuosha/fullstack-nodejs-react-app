import {InputTextProps, defaultInputTextProps} from "../uiTypes/uiTypes";

const InputText: React.FC<InputTextProps> = ({options}: InputTextProps) => {
    options = {...defaultInputTextProps.options, ...options}
    const {id, isLabel, labelTitle, labelClassName, inputClassName, inputGroupClassName, placeHolder} = options
    const label = isLabel ?
        <label className={labelClassName}
               htmlFor={id}>{labelTitle}</label> : ''
    return (
        <>
            {label}
            <div className={inputGroupClassName}>
                <input type="text"
                       name={id}
                       className={inputClassName}
                       id={id}
                       placeholder={placeHolder}/>
            </div>
        </>
    );
};

export default InputText;