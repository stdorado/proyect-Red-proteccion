import UserService from "../Service/user.service.js";
import { logger } from "../Utils/Winster.Logger.js";


export async function GetAllUsers(req,res) {
try {
     const users = await UserService.findAll()
     logger.info("Usuarios traidos :" , users)
     res.json(users)
} catch (error) {
    res.status(500).json({ error: error.message });
}
} //funciona con exito

export async function GetOneUserById(req,res){
    try {
        const {id} = req.params
        const users = await UserService.findById(id)
     logger.info("Usuarios Obtenido :" , users)

        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} //funciona con exito

export async function CreateOneUser(req,res){
    try {
        const {data} = req.body
        const users = await UserService.createOne(data)
     logger.info("Usuarios creado :" , users)

        res.json(users)
    } catch (error) {
        res.status(500).json({ error: "error en el controller" + error.message });
    }
} //funciona con exito

export async function UpdateOneUser(req,res){
    try {
        const {data} = req.body
        const {id} = req.params

        const users = await UserService.updateOne(id,data)
        logger.info("Usuarios actualizado :" , users)

        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} //funciona con exito, el error era la posicion de id y de la data

export async function DeleteOneUser(req,res){
    try {
        const {id} = req.params
        const users = await UserService.deleteOne(id)
        logger.info("Usuario Eliminado :" , users)
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} //Funciona con exito 