import {Request,Response} from "express"
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"

class ListUserSendComplimentsController{

    async handle(req:Request,res:Response){
        const listUserSendCompliments = new ListUserSendComplimentsService()

        const complimentsSend = await listUserSendCompliments.execute(req.user_id)

        return res.json(complimentsSend)
    }

}
export {ListUserSendComplimentsController}