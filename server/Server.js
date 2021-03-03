import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.get("/", (req, res) => {
	res.send("Hola Mundo!")
})

app.listen(port, () => {
	console.log(`SERVER IS RUNNING ON PORT: ${port}`)
})
