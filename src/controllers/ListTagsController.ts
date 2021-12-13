import {Request,Response} from "express"
import { ListTagsService } from "../services/ListTagsService"


class ListTagsController{
    async handle(req:Request,res:Response)
    {
        const listTagsServices = new ListTagsService()

        const tags = await listTagsServices.execute()

        return res.json(tags)
    }
}

export {ListTagsController}