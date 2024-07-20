interface InputTextProps {
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

interface InputTextAreaProps {
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

interface InputUploadFileProps {
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

export {
    InputTextProps,
    InputTextAreaProps,
    InputUploadFileProps
}


