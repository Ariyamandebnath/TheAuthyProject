import dotenv from "dotenv"
import connectDB from "./db/db.js"
import express from "express"

dotenv.config({
    path:'./.env'
})



connectDB()
.then(()=>{
    console.log("connected to MongoDB")
})
.catch((error)=>{
    console.log(error)
})

const app = express()
app.listen( process.env.PORT ||3000, ()=>{
    console.log(`listening on ${process.env.PORT}`)
})