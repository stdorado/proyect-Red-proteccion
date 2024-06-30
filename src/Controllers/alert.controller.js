import AlertService from "../Service/alert.service.js";
import jwt from "jsonwebtoken"

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

export async function CreateOneAlert(req, res) {
    try {
        const { titulo_Alerta, Descripcion_Alerta, Categoria_Alerta, latitude, longitude } = req.body;

        // Crea el objeto de datos de la alerta
        const alertData = {
            titulo_Alerta,
            Descripcion_Alerta,
            Categoria_Alerta,
            Fecha_Alerta: new Date(),
            Usuario: '668095b7c6a324a9b83d857a',  // Asegúrate de reemplazar esto con el verdadero id del usuario
        };

        // Verifica y añade la ubicación si latitude y longitude están definidos
        if (latitude !== undefined && longitude !== undefined) {
            alertData.ubicacion = {
                type: "Point",
                coordinates: [longitude, latitude]
            };
        }

        // Crea la alerta usando el servicio
        const alert = await AlertService.createOne(alertData);

        // Verifica si se creó correctamente la alerta
        if (!alert) {
            return res.status(500).json({ success: false, message: "Error al crear la alerta" });
        }

        // Respuesta exitosa con la alerta creada
        return res.json({ success: true, message: "Alerta creada con éxito", alert });
    } catch (error) {
        // Manejo de errores
        return res.status(500).json({ error: error.message });
    }
}

export async function UpdateOneAlert(req,res){
    try {
        const {id} = req.params
        const {data} = req.body
        data.ubicacion = {
            type: 'Point',
            coordinates: [data.longitude, data.latitude]
          };
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