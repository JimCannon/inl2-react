import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DB_URL = process.env.DATABASE_URL
const port = process.env.PORT

const connectToPort = (app) => {
	app.listen(port, () => {
		console.log(`SERVER IS RUNNING ON PORT: ${port}`)
	})
}

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log("Sucessfully connected to the database!")
	} catch (error) {
		console.log("ERROR WHILE TRYING TO CONNECT TO THE DATABASE: " + error)
		process.exit()
	}
}

export default {
	connectToDatabase,
	connectToPort,
}
