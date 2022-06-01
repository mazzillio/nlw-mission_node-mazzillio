import{Request,Response}from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../../repositories/UsersRepositories'
import { ReadUsersServices } from '../../services/usersServices/ReadUsersServices'


class ReadUserController{
 async handle(req:Request,res:Response){
     const readUsersService = new ReadUsersServices(getCustomRepository(UsersRepositories))

     const users = await readUsersService.excute()
    
     return res.json(users)
 }
}
export{ReadUserController}