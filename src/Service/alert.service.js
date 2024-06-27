import AlertManager from "../DaoS/Managers/alerts.manager.js";


class alertService{
    async findAll (){
        try {
            const alert = await AlertManager.findAll()
            if(!alert){
             return { success: false, error: "No se pudo traer las diferentes alertas" };     
            }
            return {
                success: true,
                message: "Las alertas se trajeron con exito",
                 alert
              };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async findById(id){
        try {
            const alert = await AlertManager.findById(id)
            if(!alert){
                return {success : false, error : "Alerta no encontrada"}
            }
            return{
                success : true,
                message : "La alerta solicitida fue traida con exito",
                alert
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async createOne(data){
        try {
            const alert = await AlertManager.createOne(data)
            if(!alert){
                return {succes : false, error : "Error al crear una alerta"}
            }
            return {
                succes : true,
                message : "Alerta creada con exito",
                alert
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async updateOne(id,data){
        try {
            const alert = await AlertManager.updateOne(data,id)
            if(!alert){
                return{
                    success : false,error : "Error al actualizar una alerta"
                }
            }
            return {
                succes : true,
                message : "Alerta actualizada con exito",
                alert
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async deleteOne(id){
        try {
            const alert = await AlertManager.deleteOne(id)
            if(!alert){
                return {
                    success : false,
                    message : "Error al eliminar la alerta"
                }
            }
            return {
                success : true,
                message : "Alerta eliminada con exito",
                alert
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async findAlertByUserId(userId){
        try {
            const alert = await AlertManager.findByUserId(userId)
            if(!alert){
                return {
                    success : false,
                    message : "Error al traer las alertas del usuario"
                }
            }
            return {
                success : true,
                message : "Las alertas del usuario son :",
                alert
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

const AlertService = new alertService()
export default AlertService;
