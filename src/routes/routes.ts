import { Router } from "express";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "../controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "../controllers/ListUserReceiveComplimentsController";

import { ListComplimentsController } from "../controllers/ListComplimentsController";
import { UpdateComplimentController } from "../controllers/UpdateComplimentController";
import { DeleteComplimentController } from "../controllers/DeleteComplimentController";
import { usersRoutes } from "./users.routes";
import { tagsRoutes } from "./tags.routes";

const createComplimentController = new CreateComplimentController()
const listSendUserComplimentsController = new ListUserSendComplimentsController()
const listReceiveUserComplimentsController = new ListUserReceiverComplimentsController()
const listComplimentsController = new ListComplimentsController()
const updateComplimentsController = new UpdateComplimentController()
const deleteComplimentsController = new DeleteComplimentController()




const router=Router()
router.use("/users",usersRoutes)
router.use("/tags",tagsRoutes)


router.post("/compliments",ensureAuthenticate,createComplimentController.handle)
router.get("/users/compliments/send",ensureAuthenticate,listSendUserComplimentsController.handle)
router.get("/users/compliments/receive",ensureAuthenticate,listReceiveUserComplimentsController.handle)
router.get("/compliments",ensureAuthenticate,listComplimentsController.handle)
router.put("/compliments/:id",ensureAuthenticate,updateComplimentsController.handle)
router.delete("/compliments/:id",ensureAuthenticate,deleteComplimentsController.handle)

export{router}