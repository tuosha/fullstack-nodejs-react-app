import * as uuid from 'uuid'
import path from 'path'

class FileServices {
	static saveFile (file) {
		try {
			const fileName = uuid.v4() + '.jpg'
			const filePath = path.resolve('static', fileName)
			file.mv(filePath)
			return fileName
		}
		catch (err) {
			console.log(err)
		}
	}
}

export default FileServices