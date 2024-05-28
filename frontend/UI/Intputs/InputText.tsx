interface Props {
    options: {
        id?: string,
        isLabel?: boolean,
        labelTitle?: string,
        labelClassName?: string,
        inputClassName?: string
        inputGroupClassName?: string,
        placeHolder?: string,
    }
}

const defaultProps: Partial<Props> = {
    options: {
        id: '',
        isLabel: true,
        labelTitle: '',
        labelClassName: 'sr-only',
        inputClassName: 'form-control mb-2 mr-sm-2',
        inputGroupClassName: 'input-group',
        placeHolder: '',
    }
}

const InputText: React.FC<Props> = ({options}) => {
    options = {...defaultProps.options, ...options}
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