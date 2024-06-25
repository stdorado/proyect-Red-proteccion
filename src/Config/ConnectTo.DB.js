import mongoose from "mongoose"
import dotenv from "dotenv"
import { logger } from "../Utils/Winster.Logger.js"

dotenv.config()
mongoose.connect(process.env.DB_MONGO)
.then(()=>{
    logger.info("Data Base Connection")
}).catch((err)=>{
    logger.error("Error to Connection DB")
})
export default mongoose;