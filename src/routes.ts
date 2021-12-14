import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ReadUserController } from "./controllers/ReadUsersController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { DeleteTagController } from "./controllers/DeleteTagController";

const router=Router()

const createUserControler =new CreateUserController()
const readUserControler = new ReadUserController()
const authenticateUserControler= new AuthenticateUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createComplimentController = new CreateComplimentController()
const listSendUserComplimentsController = new ListUserSendComplimentsController()
const listReceiveUserComplimentsController = new ListUserReceiverComplimentsController()


const createTagControler = new CreateTagController()
const listTagsController = new ListTagsController()
const deleteTagsController = new DeleteTagController()

router.post("/users",createUserControler.handle)
router.get("/users",ensureAuthenticate,ensureAdmin,readUserControler.handle)
router.put("/users/:id",ensureAuthenticate,ensureAdmin,updateUserController.handle)
router.delete("/users/:id",ensureAuthenticate,ensureAdmin,deleteUserController.handle)

router.post("/login",authenticateUserControler.handle)

router.post("/tags", ensureAuthenticate,ensureAdmin,createTagControler.handle)
router.get("/tags",ensureAuthenticate,listTagsController.handle)
router.delete("/tags/:id",ensureAuthenticate,ensureAdmin,deleteTagsController.handle)

router.post("/compliments",ensureAuthenticate,createComplimentController.handle)
router.get("/users/compliments/send",ensureAuthenticate,listSendUserComplimentsController.handle)
router.get("/users/compliments/receive",ensureAuthenticate,listReceiveUserComplimentsController.handle)

export{router}