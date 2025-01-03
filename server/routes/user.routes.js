import express from "express"
import { LoginController, registerController } from "../controllers/user.controller.js"
// import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.route("/register").post(registerController)
router.route("/login").post(LoginController)

export default router