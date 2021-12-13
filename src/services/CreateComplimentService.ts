import { getCustomRepository } from "typeorm"
import { ComplimentsRepositoris } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplementRequest{
    tag_id:string
    user_sender:string
    user_receiver:string
    message:string
}
class CreateComplimentService{

    async execute({tag_id,user_sender,user_receiver,message}:IComplementRequest)
    {
        const complimentRepositories = getCustomRepository(ComplimentsRepositoris)
        const usersRepositories = getCustomRepository(UsersRepositories)

        if(user_sender===user_receiver)
        {
            throw new Error("Incorrect User");
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        
        if(!userReceiverExists)
        {
            throw new Error("User Receiver does not exists!");
        }
        
        const compliment =complimentRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })
        
        await complimentRepositories.save(compliment)

        return compliment
    }
}

export {CreateComplimentService}