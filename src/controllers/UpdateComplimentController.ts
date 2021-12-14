import { Request,Response } from "express";
import { UpdateComplimentService } from "../services/UpdateComplimentService";


export class UpdateComplimentController{
    async handle(req:Request,res:Response)
    {
        const{id}=req.params
        const user_sender=req.user_id as string
        const {tag_id,message}=req.body
        const complimentService = new UpdateComplimentService()

        const compliment = await complimentService.execute({id,user_sender,tag_id,message})

        return res.json(compliment)

    }
}