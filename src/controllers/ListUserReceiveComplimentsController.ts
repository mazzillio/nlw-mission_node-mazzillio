import {Request,Response} from "express"
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService"

class ListUserReceiverComplimentsController{

    async handle(req:Request,res:Response){
        const listUserReceiverCompliments = new ListUserReceiverComplimentsService()

        const complimentsReceiver = await listUserReceiverCompliments.execute(req.user_id)

        return res.json(complimentsReceiver)
    }

}
export {ListUserReceiverComplimentsController}