import { UsersRepositories } from "../../repositories/UsersRepositories"
import {getCustomRepository} from "typeorm"
import {hash} from "bcryptjs"
interface IUserRequest{
    name:string,
    email:string,
    admin?:boolean
    password:string
}


class CreateUserService{
    constructor(private userRepository){}
    async execute({name,email,admin = false,password}:IUserRequest){
        //const userRepository = getCustomRepository( UsersRepositories)

        if(!email){
            throw new Error("Email incorrect");
            
        }

        const userAlreadyExist= await this.userRepository.findOne({
            email
        })
        
        if(userAlreadyExist){
            throw new Error("User already exists")
        }

        const passwordHash= await hash(password,8)
        const user = this.userRepository.create({
            name,email,admin,
            password:passwordHash
        })
        await this.userRepository.save(user)

        return user
    }
}

export{CreateUserService}