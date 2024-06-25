import express from "express"
import mongoose from "./Config/ConnectTo.DB.js"
import { logger } from "./Utils/Winster.Logger.js"

const app = express()
const PORT = process.env.PORT || 5000



app.listen(PORT,()=>{
    logger.info("Server on port 5000")
})