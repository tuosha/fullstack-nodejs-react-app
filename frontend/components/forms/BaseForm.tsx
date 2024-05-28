import InputText from '../../UI/Intputs/InputText'
import InputTextArea from '../../UI/Intputs/InputTextArea'
import InputUploadFile from '../../UI/Intputs/InputUploadFile'
import axios from 'axios'
import { _basePostsUrl } from '../../api/urls'
import { useState, useRef  } from 'react'

const BaseForm = () => {
	const [file, setFile] = useState<File | null>(null)
    const form = useRef(null)

	const onFileChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
	}

	const onHandleSubmit: React.MouseEventHandler<HTMLButtonElement>= async (e) => {
		e.preventDefault()
        const formData = new FormData(form.current)
        formData.append('picture', file)
		await axios.post(_basePostsUrl, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
		})
	}

	return (
		<form className="form-inline"  id="base-form" ref={form}>
			<InputText
				options = {{
					id: 'title',
					labelTitle: 'Title',
					placeHolder: 'Title'
				}}
			 />
			<InputText
				options = {{
					id: 'author',
					labelTitle: 'Author',
					placeHolder: 'Author'
				}}
			/>
			<InputTextArea
				options = {{
					id: 'content',
					isLabel: false,
					labelTitle: 'Content',
					labelClassName: 'sr-only',
					inputGroupClassName: 'input-group mb-3',
					textAreaClassName: 'form-control',
				}}
			/>

			<InputUploadFile
                onFileChange = {onFileChange}
				options = {{
					id: 'inputUploadFile',
					labelTitle: 'Upload',
					labelClassName: 'input-group-text',
					inputGroupClassName: 'input-group mb-3',
				}}
			/>

			<button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={onHandleSubmit}>Submit</button>
		</form>
	)
}

export default BaseForm

