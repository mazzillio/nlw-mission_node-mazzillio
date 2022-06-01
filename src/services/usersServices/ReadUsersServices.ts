import {classToPlain} from "class-transformer"

class ReadUsersServices{
    constructor(private userRepository){}
    async excute()
    {
        const users = await this.userRepository.find({})
        return classToPlain(users)
    }

}

export { ReadUsersServices }