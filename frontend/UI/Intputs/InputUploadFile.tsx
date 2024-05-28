type Props = {
    onFileChange: React.ChangeEventHandler<HTMLInputElement>
    options: {
        id: string,
        isLabel?: boolean,
        labelTitle?: string,
        labelClassName?: string,
        inputClassName?: string
        inputGroupClassName?: string,
    }
}

const defaultProps: Partial<Props> = {
    options: {
        id: '',
        isLabel: true,
        labelTitle: '',
        labelClassName: '',
        inputClassName: 'form-control',
        inputGroupClassName: 'input-group',
    }
}

const InputUploadFile: React.FC<Props> = ({onFileChange, options}) => {
    options = {...defaultProps.options, ...options}
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