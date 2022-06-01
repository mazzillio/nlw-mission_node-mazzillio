import {Request,Response} from "express"
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../repositories/TagsRepositories"
import { DeleteTagService } from "../../services/tagsServices/DeleteTagsService"




export class DeleteTagController{

    async handle(req:Request,res:Response)
    {
        const {id}=req.params

        const tagService = new DeleteTagService(getCustomRepository(TagsRepositories))

        await tagService.execute(id)
        return res.status(204).end()
    }

}