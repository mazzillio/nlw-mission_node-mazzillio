import { Router } from "express";
import { CreateTagController } from "../controllers/TagsControllers/CreateTagController";
import { DeleteTagController } from "../controllers/TagsControllers/DeleteTagController";
import { ListTagsController } from "../controllers/TagsControllers/ListTagsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const createTagControler = new CreateTagController()
const listTagsController = new ListTagsController()
const deleteTagsController = new DeleteTagController()

const tagsRoutes=Router()

tagsRoutes.post("", ensureAuthenticate,ensureAdmin,createTagControler.handle)
tagsRoutes.get("",ensureAuthenticate,listTagsController.handle)
tagsRoutes.delete("/:id",ensureAuthenticate,ensureAdmin,deleteTagsController.handle)



export{tagsRoutes}