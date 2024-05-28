interface Props {
    options: {
        id?: string,
        isLabel: boolean,
        labelTitle?: string,
        labelClassName?: string,
        inputGroupClassName?: string,
        textAreaClassName?: string,
        placeHolder?: string,
        ariaLabel?: string,
        rows?: number
    }
}

const defaultProps: Partial<Props> = {
    options: {
        id: '',
        isLabel: true,
        labelTitle: '',
        labelClassName: '',
        inputGroupClassName: 'input-group',
        textAreaClassName: '',
        placeHolder: '',
        ariaLabel: 'With textarea',
        rows: 2,
    }
}

const InputTextArea: React.FC<Props> = ({options}, Options) => {
    options = {...defaultProps.options, ...options}
    const {id, isLabel, labelTitle, labelClassName, inputGroupClassName, textAreaClassName, placeHolder, ariaLabel, rows} = options
    const label = isLabel ?
        <label className={labelClassName}
               htmlFor={id}>{labelTitle}</label> : ''
    return (
        <>
            {label}
            <div className={inputGroupClassName}>
                <textarea className={textAreaClassName}
                          id={id}
                          placeholder={placeHolder}
                          aria-label={ariaLabel}
                          rows={rows}/>
            </div>
        </>
    );
};


export default InputTextArea;