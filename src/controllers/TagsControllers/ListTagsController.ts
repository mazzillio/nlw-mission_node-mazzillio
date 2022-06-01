import {Request,Response} from "express"
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../repositories/TagsRepositories"
import { ListTagsService } from "../../services/tagsServices/ListTagsService"
class ListTagsController{
    async handle(req:Request,res:Response)
    {
        const listTagsServices = new ListTagsService(getCustomRepository(TagsRepositories))

        const tags = await listTagsServices.execute()

        return res.json(tags)
    }
}

export {ListTagsController}