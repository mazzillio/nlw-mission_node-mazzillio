import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ReadUserController } from "./controllers/ReadUsersController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router=Router()

const createUserControler =new CreateUserController()
const createTagControler = new CreateTagController()
const readUserControler = new ReadUserController()
const authenticateUserControler= new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()


router.post("/users",createUserControler.handle)
router.get("/users",readUserControler.handle)

router.post("/login",authenticateUserControler.handle)

router.post("/tags", ensureAdmin,createTagControler.handle)

router.post("/compliments",createComplimentController.handle)

export{router}