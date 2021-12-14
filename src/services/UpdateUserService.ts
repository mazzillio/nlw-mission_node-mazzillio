import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {hash} from "bcryptjs"

interface IUser{
    id:string
    email?:string,
    password?:string,
    admin?:boolean
}

class UpdateUserService{

    async execute({id,email,password,admin}:IUser)
    {
        const userRepositories= getCustomRepository(UsersRepositories)

        
        const user = await userRepositories.findOne(id)   
        
        if(!user)
            throw new Error("Usuario not found!");
            

        user.email=email?email:user.email
        user.password=password?await hash(password,8):user.password
        user.admin=admin !==undefined?admin:user.admin

        await userRepositories.save(user)

        return user
    }

}

export {UpdateUserService}