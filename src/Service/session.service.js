import SessionManager from "../DaoS/Managers/session.manager.js";
import UserManager from "../DaoS/Managers/user.manager.js";
import { generateTokenJWT } from "../Utils/Jwt.Auth.js";


class sessionService {
    async  login(Correo_Electronico, Contraseña) {
        try {
            const user = await SessionManager.login(Correo_Electronico, Contraseña);
            if (!user) {
                throw new Error("Invalido el correo o la contraseña");
            }
            const token = generateTokenJWT({ id: user._id, email: user.Correo_Electronico });
            return { user, token };
        } catch (error) {
            console.error("Error en el servicio de inicio de sesión:", error);
            throw error; 
        }
    }
    
    async register(Correo_Electronico,Nombre,Apellido,Contraseña){
        try {
            const existsUser = await UserManager.findOne({Correo_Electronico})
            if(existsUser){
                return {
                    success : false,
                    error : "El usuario ya existe"
                }
            }
            const newUser = await UserManager.createOne({
                Correo_Electronico,
                Nombre,
                Apellido,
                Contraseña
            });
            return {
                success : true,
                message : "Registro exitoso",
                newUser 
            }
            
        } catch (error) {
            return { success: false, error: error.message }
            
        }
    }
}

const SessionService = new sessionService()
export default SessionService;