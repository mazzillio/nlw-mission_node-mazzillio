import express, {Request,Response,NextFunction, response} from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { router } from "./routes"

const app=express()

app.use(express.json())
app.use(router)

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{

    if(err instanceof Error)
    {
        return res.status(400).json({
            error:err.message
        })
    }
    return res.status(500).json({
        status:"error",
        message:"Internal Server Errro"
    })

})
app.listen(3500,()=>console.log("Server is running MISSION"))
