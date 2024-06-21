import {defaultInputUploadFileProps, InputUploadFileProps} from "../uiTypes/uiTypes";

const InputUploadFile: React.FC<InputUploadFileProps> = ({onFileChange, options}: InputUploadFileProps) => {
    options = {...defaultInputUploadFileProps.options, ...options}
    const {id, isLabel, inputGroupClassName, inputClassName, labelClassName, labelTitle} = options
    const label = isLabel ?
        <label className={labelClassName} htmlFor={id}>{labelTitle}</label> : ''
    return (
        <div className={inputGroupClassName}>
            <input type="file"
                   onChange={onFileChange}
                   className={inputClassName}
                   id={id}/>
            {label}
        </div>
    );
};

export default InputUploadFile;