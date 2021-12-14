import {Request,Response} from "express"
import { DeleteTagService } from "../services/DeleteTagsService"



export class DeleteTagController{

    async handle(req:Request,res:Response)
    {
        const {id}=req.params

        const tagService = new DeleteTagService()

        await tagService.execute(id)
        return res.status(204).end()
    }

}