import {Request,Response}  from "express"
import { UpdateUserService } from "../services/UpdateUserService"


class UpdateUserController{

    async handle(req:Request,res:Response){
        const {id}=req.params
        const {email,admin,password}=req.body

        const updateUserController= new UpdateUserService()

        const new_user= await updateUserController.execute({id,email,admin,password})

        return res.json(new_user)

    }
}

export{UpdateUserController}

