import express, { urlencoded } from "express"
import mongoose from "./Config/ConnectTo.DB.js"
import { logger } from "./Utils/Winster.Logger.js"
import UserRouter from "./router/user.routes.js"
import AlertRouter from "./router/alert.routes.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(urlencoded({extends : true}))

app.use("/api",UserRouter)
app.use("/api",AlertRouter)

app.listen(PORT,()=>{
    logger.info("Server on port 5000")
})