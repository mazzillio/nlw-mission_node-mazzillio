import express from "express"
import "reflect-metadata"
import "./database"
import { router } from "./routes"

const app=express()

app.use(express.json())
app.use(router)

app.listen(3500,()=>console.log("Server is running MISSION"))
