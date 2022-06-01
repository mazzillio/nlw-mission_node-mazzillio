import {Request,Response} from "express"
import { CreateUserService } from "../../services/usersServices/CreateUserService"
import {UsersRepositories} from '../../repositories/UsersRepositories'
import { getCustomRepository } from "typeorm"

class CreateUserController{

    async handle(req:Request,res:Response )
    {
        const {name, email, admin,password}=req.body

        const createUserService = new CreateUserService(getCustomRepository(UsersRepositories))

        const user = await createUserService.execute({name,email,admin,password})

        return res.json(user)
    }

}

export{CreateUserController}