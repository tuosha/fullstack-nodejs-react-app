import { InputTextAreaProps, InputTextProps, InputUploadFileProps } from '../../../types/InputsTypes'

const defaultInputTextProps: Partial<InputTextProps> = {
    options: {
        id: '',
        isLabel: true,
        labelTitle: '',
        labelClassName: 'sr-only',
        inputClassName: 'form-control mb-2 mr-sm-2',
        inputGroupClassName: 'input-group',
        placeHolder: '',
    },
}

const defaultInputTextAreaProps: Partial<InputTextAreaProps> = {
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
    },
}

const defaultInputUploadFileProps: Partial<InputUploadFileProps> = {
    options: {
        id: '',
        isLabel: true,
        labelTitle: '',
        labelClassName: '',
        inputClassName: 'form-control',
        inputGroupClassName: 'input-group',
    },
}

export { defaultInputTextProps, defaultInputTextAreaProps, defaultInputUploadFileProps }
