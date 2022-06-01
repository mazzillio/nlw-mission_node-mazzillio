import{Request,Response}from "express"
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../repositories/TagsRepositories"
import { CreateTagsService } from "../../services/tagsServices/CreateTagsService"
class CreateTagController{

    async handle(req:Request,res:Response){
        
        const{name}=req.body
        
        const createTagService = new CreateTagsService(getCustomRepository(TagsRepositories))

        const tag = await createTagService.execute(name)
        
        return res.json(tag)
    }

}

export{CreateTagController}