import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose'

const mongodbConnection = () => {
	const uri = 'mongodb+srv://tuosha86:npLY64HUXcdoaaRc@cluster.rylx2bi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
	const client = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	})
	const run = async () => {
		try {
			await mongoose.connect(uri)
			await client.db('admin').command({ ping: 1 })
			console.log(
				'Pinged your deployment. You successfully connected to MongoDB!')
		}
		catch (e) {
			console.log(e)
		}
		finally {
			await client.close()
		}
	}
	run().then()
}
export default mongodbConnection
