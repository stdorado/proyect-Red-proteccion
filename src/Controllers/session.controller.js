import SessionManager from "../Service/session.service.js";

export async function LoginControllerSession(req, res) {
    try {
        const { Contraseña, Correo_Electronico } = req.body;
        const { user, token } = await SessionManager.login(Correo_Electronico, Contraseña);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        req.session.jwt = token

        console.log("Usuario en la session actual", req.session.jwt)

        res.json({ user, token });
    } catch (error) {
        console.error("Error en el controlador de inicio de sesión:", error);
        res.status(401).json({ message: "Invalido el email o la contraseña, controller" });
    }
}

export async function RegisterControllerSession(req,res){
    try {
        const {Correo_Electronico,Nombre,Apellido,Contraseña} = req.body.data
       console.log("Datos del body", Contraseña,Correo_Electronico,Nombre,Apellido)

        const result = await SessionManager.register(
            Correo_Electronico,
            Nombre,
            Apellido,
            Contraseña
        )
        if (result.success) {
            res
              .status(200)
              .json({
                success: true,
                message: "Registro exitoso",
                result : result.newUser
              });
          } else {
            res.status(400).json({ success: false, error: result.error });
          }
        
    } catch (error) {
        res.status(400).json({success : false , error : "Error en el registro"})
        throw error;
    }
}

export async function LogOutControllerSession(req,res){
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error al cerrar sesión' });
        }
        res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
    });
}