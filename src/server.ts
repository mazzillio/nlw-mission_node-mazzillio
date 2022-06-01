import express from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { errorrTratado } from "./middlewares/error"
import { router } from "./routes/routes"

const app=express()

app.use(express.json())
app.use(router)

app.use(errorrTratado)
app.listen(3500,()=>console.log("Server is running MISSION"))
