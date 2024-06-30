import Bcrypt from "bcrypt"
import { logger } from "./Winster.Logger.js"

//funciona correctamente
export async function EncriptarPassword(password){
    try {
        const hashToPassword = await Bcrypt.hash(password,10)
        logger.info("Contraseña hasheada",hashToPassword)
        return hashToPassword
    } catch (error) {
        logger.error("Error al encriptar la contraseña",error)
        return false
    }
}

//Testear
export async function ComparePassword(password,hashToPassword){
   try {
    const match = await Bcrypt.compare(password,hashToPassword)
    logger.info("Contraseña hasheada",match)
    if(match){
        logger.info("Las contraseñas coiciden")
        return true
    }else{
        logger.info("Hay un error las contraseñas no coiciden")
        return false
    }
    
   } catch (error) {
    logger.error("Error:",error.message)
   }
}


