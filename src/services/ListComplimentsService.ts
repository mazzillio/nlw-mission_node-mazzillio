import { getCustomRepository } from "typeorm";
import { ComplimentsRepositoris } from "../repositories/ComplimentsRepositories";



export class ListComplimentsService{

    async execute(){
        
        const complimentsRepository = getCustomRepository(ComplimentsRepositoris)

        const compliments = await complimentsRepository.find({
            relations:["tag","userRecevier","userSender"]
        })

        return compliments
    }

}