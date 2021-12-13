import { getCustomRepository } from "typeorm"
import { ComplimentsRepositoris } from "../repositories/ComplimentsRepositories"



class ListUserReceiverComplimentsService{

    async execute(user_id:string)
    {
        const complimentsRepositories =getCustomRepository(ComplimentsRepositoris)

         const compliments = await complimentsRepositories.find({
            where:{
                user_receiver:user_id
            },
            relations:["userSender","userRecevier","tag"],
            
         })
         return compliments
    }

}

export {ListUserReceiverComplimentsService}