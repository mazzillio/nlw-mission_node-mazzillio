import {Request,Response} from "express"
import { DeleteComplimentService } from "../services/DeleteComplimentsService"


export class DeleteComplimentController{

    async handle (req:Request,res:Response){
        const {id}=req.params

        const complimentService = new DeleteComplimentService()

        await complimentService.execute(id)

        return res.status(204).end()
    }

}