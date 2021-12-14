import { Request,Response } from "express";
import { ListComplimentsService } from "../services/ListComplimentsService";


export class ListComplimentsController{

    async handle(req:Request,res:Response)
    {
        const complimentsService = new ListComplimentsService()

        const compliments = await complimentsService.execute()

        return res.json(compliments)
    }
}