import express from 'express'
import path from 'path'
import postsRouter from './routers/postsRouter.js'
import formData from 'express-form-data'
import mongodbConnection from './dbConnectors/mongodbConnection.js'
import fileUpload from 'express-fileupload'
import cors from 'cors'

const __dirname = path.resolve()
const PORT = 3002
const app = express()
const frontBaseUrl = 'http://localhost:3001'
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
app.use(cors({
		origin: frontBaseUrl,
	}
))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', postsRouter)
app.use(formData.parse({
	uploadDir: path.resolve(__dirname, 'static'),
	autoClean: true}))
mongodbConnection()



app.listen(PORT, () => {
	console.log('server work on port: ' + PORT)
})

