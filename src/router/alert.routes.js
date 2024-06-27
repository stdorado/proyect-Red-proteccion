import { GetAllAlerts,GetAlertById,CreateOneAlert,DeleteOneAlert,UpdateOneAlert } from "../Controllers/alert.controller.js";
import { Router } from "express";

const router = Router()


router.get("/GetAllAlerts",GetAllAlerts) //ok
router.get("/GetAlertsById/:id",GetAlertById) //ok
router.post("/CreateAlert",CreateOneAlert) //ok
router.delete("/DeleteOneAlert/:id",DeleteOneAlert) //ok
router.put("/UpdateAlert/:id",UpdateOneAlert) //revisar este router

export default router;