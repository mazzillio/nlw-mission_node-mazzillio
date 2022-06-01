import {Request,Response,NextFunction} from "express"
import {verify} from "jsonwebtoken"

interface IPayload{
    sub:string
}


export function ensureAuthenticate(req:Request,res:Response,next:NextFunction)
{

    const auhtToken = req.headers.authorization

    if(!auhtToken)
    {
        return res.status(401).end()
    } 
    const [,token] = auhtToken.split(" ")
    
    try {
        const {sub}=verify(token,"73941fb540a7fd170c844a6f555857a7") as IPayload
        
        req.user_id=sub
        
        return next()

    } catch (err) {
        return res.status(401).end()
    }
}