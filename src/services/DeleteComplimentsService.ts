import { getCustomRepository } from "typeorm";
import { ComplimentsRepositoris } from "../repositories/ComplimentsRepositories";



export class DeleteComplimentService{


    async execute(id:string)
    {
        const complimentRepositroy = getCustomRepository(ComplimentsRepositoris)

        if(! await complimentRepositroy.findOne(id))
            throw new Error("Compliments does not exists!");
        
        await complimentRepositroy.delete(id)
    }


}