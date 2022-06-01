import { Router } from "express";
import { AuthenticateUserController } from "../controllers/UserControllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/UserControllers/CreateUserControllers";
import { DeleteUserController } from "../controllers/UserControllers/DeleteUserController";
import { ReadUserController } from "../controllers/UserControllers/ReadUsersController";
import { UpdateUserController } from "../controllers/UserControllers/UpdateUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const createUserControler =new CreateUserController()
const readUserControler = new ReadUserController()
const authenticateUserControler= new AuthenticateUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const usersRoutes = Router()

usersRoutes.post("",createUserControler.handle)
usersRoutes.get("",ensureAuthenticate,ensureAdmin,readUserControler.handle)
usersRoutes.put("/:id",ensureAuthenticate,ensureAdmin,updateUserController.handle)
usersRoutes.delete("/:id",ensureAuthenticate,ensureAdmin,deleteUserController.handle)

usersRoutes.post("/login",authenticateUserControler.handle)

export {usersRoutes}