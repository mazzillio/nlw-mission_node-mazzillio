import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



export class DeleteUserService{

    async execute(id:string)
    {
        const userRepository=getCustomRepository(UsersRepositories)

        const user = await userRepository.findOne(id)
        
        if(!user)
            throw new Error("Usuario does not exists!")
        
        await userRepository.delete(id)
            
    }


}