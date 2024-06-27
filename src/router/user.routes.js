import { CreateOneUser,DeleteOneUser,GetAllUsers,GetOneUserById,UpdateOneUser } from "../Controllers/user.controller.js";
import { Router } from "express";

const router = Router()

router.get("/GetAllUsers",GetAllUsers)
router.get("/GetOneUser/:id",GetOneUserById)
router.post("/CreateOneUser",CreateOneUser)
router.put("/UpdateUser/:id",UpdateOneUser)
router.delete("/DeleteOneUser/:id",DeleteOneUser)

export default router;