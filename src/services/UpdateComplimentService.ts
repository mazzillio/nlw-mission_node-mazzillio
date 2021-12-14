import { getCustomRepository } from "typeorm";
import { ComplimentsRepositoris } from "../repositories/ComplimentsRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";


interface IComplimentRequest{
    id:string
    user_sender:string
    tag_id?:string
    message?:string
}

export class UpdateComplimentService{

    
    async execute({id,user_sender,tag_id,message}:IComplimentRequest){

        const complimentRepository = getCustomRepository(ComplimentsRepositoris)

        const compliment = await complimentRepository.findOne(id)

        if(!compliment)
            throw new Error("Compliment does not exists")
        
        if(compliment.user_sender!==user_sender)
            throw new Error("Usuario does not can change this compliment!");
        
        const tagRepository= getCustomRepository(TagsRepositories)

        const tag = await tagRepository.findOne(tag_id)

        if(!tag)
            throw new Error("New tag does not exists!");
        
        
        compliment.tag_id=tag_id
        compliment.message=message?message:compliment.message
        compliment.user_sender=compliment.user_sender
       
            
    
        await complimentRepository.save(compliment)

        return compliment
            



    }







}