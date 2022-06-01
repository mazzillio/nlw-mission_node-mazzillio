import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import {classToPlain} from "class-transformer"

class ReadUsersServices{

    async excute()
    {
        const userRepositories = getCustomRepository(UsersRepositories)

        const users = await userRepositories.find({})
        return classToPlain(users)
    }

}

export {ReadUsersServices}