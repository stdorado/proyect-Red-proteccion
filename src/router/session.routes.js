import { LoginControllerSession,RegisterControllerSession,LogOutControllerSession } from "../Controllers/session.controller.js";
import { Router } from "express";
import { authenticateToken } from "../Middlewares/Jwt.verify.js";

const router = Router()

router.post("/login",LoginControllerSession)
router.post("/register",RegisterControllerSession)
router.post("/logOut", authenticateToken ,LogOutControllerSession)

export default router