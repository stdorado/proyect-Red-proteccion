import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Nombre : {
        type : String,
        require : true
    },
    Apellido : {
        type : String,
        require : true
    },
    Contraseña :{
        type : String,
        require : true
    },
    Correo_Electronico : {
        type : String,
        require : true
    },
    Role :  {
        type : String,
        enum : ["user","admin"],
        default : "user"
    },
    Ultima_conexion : {
        type : Date,
        default : null
    },
    Documentos :{
        nombre : String,
        referencia : String
    },
    Edad : {
        type : Number,
        require : true,
        max : 99,
        min : 10
    },
    Fecha_unio :{
        type : Date,
        default : Date.now
    }
})

const User = new mongoose.model("Usuarios", userSchema)
export default User;