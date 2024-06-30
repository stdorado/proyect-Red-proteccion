import UserManager from "./user.manager.js";
import { logger } from "../../Utils/Winster.Logger.js";
import bcrypt from "bcrypt"
class sessionManager{

    async  login(Correo_Electronico, Contraseña) {
        try {
            const user = await UserManager.getUserByEmail(Correo_Electronico);
            if (!user) {
                logger.error("Usuario no encontrado con el email proporcionado");
                return null;
            }
    
            console.log("Contraseña ingresada:", Contraseña);
            console.log("Contraseña almacenada:", user.Contraseña);
    
            if (!Contraseña || !user.Contraseña) {
                logger.error("Contraseña ingresada o almacenada no está definida");
                return null;
            }
    
            const passwordMatch = await bcrypt.compare(Contraseña, user.Contraseña);
            console.log("Coincidencia de contraseñas:", passwordMatch);
    
            if (!passwordMatch) {
                logger.error("La contraseña no coincide");
                return null;
            }
    
            return user;
        } catch (error) {
            logger.error("Error en el manager de inicio de sesión:", error);
            throw error; // Asegúrate de relanzar el error para que se maneje en el servicio
        }
    } //Funciona con exito
}

const SessionManager = new sessionManager()
export default SessionManager;