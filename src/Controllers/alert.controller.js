import AlertService from "../Service/alert.service.js";


export async function GetAllAlerts (req,res){
  try {
    const alert = await AlertService.findAll()
    res.json(alert)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function GetAlertById(req,res){
    try {
        const {id} = req.params
        const alert = await AlertService.findById(id)
        if(!alert){
            return{
                success : false,
                message : "Error al traer la alerta"
            }
        }
       res.json(alert)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function CreateOneAlert(req,res){
    try {
        const {data} = req.body
        const alert = await AlertService.createOne(data)
        console.log(data)
        if(!alert){
            return {
                success : false,
                message : "Error al crear la alerta"
            }
        }
       res.json(alert)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function UpdateOneAlert(req,res){
    try {
        const {id} = req.params
        const {data} = req.body
        const alert = await AlertService.updateOne(data,id)
        res.json(alert)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function DeleteOneAlert(req, res) {
    try {
        const { id } = req.params;
        const alert = await AlertService.deleteOne(id); // Añadir await para esperar a la promesa

        res.json({
            success: true,
            message: "Alerta eliminada con éxito",
            alert
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}