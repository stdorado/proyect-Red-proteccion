import Bcrypt from "bcrypt"
import { logger } from "./Winster.Logger.js"

//funciona correctamente
async function EncriptarPassword(password){
    try {
        const hashToPassword = await Bcrypt.hash(password,10)
        logger.info("Contraseña hasheada",hashToPassword)
    } catch (error) {
        logger.error("Error al encriptar la contraseña",error)
    }
}

//Testear
async function ComparePassword(password,hashToPassword){
   try {
    const match = await Bcrypt.compare(password,hashToPassword)
    if(!match){
        logger.info("Las contraseñas coiciden")
    }else{
        logger.info("Hay un error las contraseñas no coiciden")
    }
   } catch (error) {
    logger.error("Error:",error.message)
   }
}

EncriptarPassword("Contraseña tester")
