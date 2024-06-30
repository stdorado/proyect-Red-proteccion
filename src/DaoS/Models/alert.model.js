import mongoose, { Schema } from "mongoose";
import User from "./user.model.js";

const alertSchema = mongoose.Schema({
    titulo_Alerta : {
        type : String,
        required : true
    },
    Descripcion_Alerta :{
        type : String,
        required : true
    },
    Fecha_Alerta : {
        type : Date,
        default : Date.now
    },
    Usuario : {
        type : Schema.Types.ObjectId,
        ref : "Usuarios",
        required : true
    },
    Categoria_Alerta :{
        type : String,
        enum : ["Bomberos","Policia","Hospital","Policia Rural","Defensa Civil"],
        required : true
    },
    ubicacion: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
})
alertSchema.index({ ubicacion: "2dsphere" });

const AlertSchema = new mongoose.model("Alertas",alertSchema);
export default AlertSchema;