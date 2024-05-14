import { Router } from "express";
import UserController from "../controllers/UserController";

const AuthRouter = Router();

AuthRouter.get("/api/auth/signin",);

AuthRouter.post("/api/auth/signup",);

AuthRouter.post("/api/auth/signout",);


export default AuthRouter;