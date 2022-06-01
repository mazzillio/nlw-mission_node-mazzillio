import{Request,Response}from 'express'
import { ReadUsersServices } from '../../services/ReadUsersServices'

class ReadUserController{
 async handle(req:Request,res:Response){
     const readUsersService = new ReadUsersServices()

     const users = await readUsersService.excute()
    
     return res.json(users)
 }
}
export{ReadUserController}