import express, { urlencoded } from "express"
import mongoose from "./Config/ConnectTo.DB.js"
import { logger } from "./Utils/Winster.Logger.js"
import UserRouter from "./router/user.routes.js"
import AlertRouter from "./router/alert.routes.js"
import SessionRouter from "./router/session.routes.js"
import ExpressSession from "express-session"
import dotenv from "dotenv"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()


app.use(express.json())
app.use(urlencoded({extends : true}))
const corsOptions = {
  origin : "http://127.0.0.1:5500",
  optionsSuccessStatus : 200
}

app.use(cors(corsOptions))

app.use(ExpressSession({
    secret: process.env.SECRET_SESSION , 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  }));

  
app.use("/api",UserRouter)
app.use("/api",AlertRouter)
app.use("/api",SessionRouter)

app.listen(PORT,()=>{
    logger.info("Server on port 5000")
})