import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAutheticateRequest{
    email:string,
    password:string
}


class AuthenticateUserService{

    async execute({email,password}:IAutheticateRequest)
    {

        const userRepositories =getCustomRepository(UsersRepositories)

        const user=await userRepositories.findOne({
            email
        })
        
        if(!user)
        {
            throw new Error("Email/Password incorrcet")
        }

        const passwordMacth=await compare(password,user.password)

        if(!passwordMacth)
            throw new Error("Email/Password incorrcet")

        const token = sign({
                email:user.email
            },
            "73941fb540a7fd170c844a6f555857a7",
            {
                subject:user.id,
                expiresIn:"2h"
            }
        )

        return token

    }

}

export {AuthenticateUserService}