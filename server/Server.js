import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import Configurations from "./configurations/Configurations.js"
import Middlewares from "./src/middlewares/Middlewares.js"
import cors from "cors"
import UserRoutes from "./src/routes/User.routes.js"

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors({ credentials: true }))
app.use(helmet())
app.use(morgan("common"))

UserRoutes.routes(app)

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configurations.connectToPort(app)
Configurations.connectToDatabase()
//Configurations.connectToFrontend(app)
app.use(express.static("../client/build"))

export default app
