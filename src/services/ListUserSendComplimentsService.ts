import { getCustomRepository } from "typeorm"
import { ComplimentsRepositoris } from "../repositories/ComplimentsRepositories"



class ListUserSendComplimentsService{

    async execute(user_id:string)
    {
        const complimentsRepositories =getCustomRepository(ComplimentsRepositoris)

         const compliments = await complimentsRepositories.find({
            where:{
                user_sender:user_id
            }
         })
         return compliments
    }

}

export {ListUserSendComplimentsService}