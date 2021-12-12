import{Request,Response}from "express"
import { CreateTagsService } from "../services/CreateTagsService"
class CreateTagController{

    async handle(req:Request,res:Response){
        
        const{name}=req.body
        
        const createTagService = new CreateTagsService()

        const tag = await createTagService.execute(name)
        
        return res.json(tag)
    }

}

export{CreateTagController}