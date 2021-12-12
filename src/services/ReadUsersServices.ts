import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

class ReadUsersServices{

    async excute()
    {
        const userRepositories = getCustomRepository(UsersRepositories)

        const users = await userRepositories.find({})
        return users
    }

}

export {ReadUsersServices}