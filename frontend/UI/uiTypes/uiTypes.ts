export interface InputTextProps {
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

export const defaultInputTextProps: Partial<InputTextProps> = {
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

export interface InputTextAreaProps {
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

export const defaultInputTextAreaProps: Partial<InputTextAreaProps> = {
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

export interface InputUploadFileProps {
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

export const defaultInputUploadFileProps: Partial<InputUploadFileProps> = {
    options: {
        id: '',
        isLabel: true,
        labelTitle: '',
        labelClassName: '',
        inputClassName: 'form-control',
        inputGroupClassName: 'input-group',
    }
}
