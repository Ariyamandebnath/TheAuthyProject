import dotenv from "dotenv"
import connectDB from "./db/db.js"
import express from "express"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
//configure dotenv package
dotenv.config({
    path:'./.env'
})

//connecting the Database with the backend
connectDB()
.then(()=>{
    console.log("connected to MongoDB")
})
.catch((error)=>{
    console.log(error)
})

//connection to our app

const app = express()
app.use(express.json())
app.listen( process.env.PORT ||3000, ()=>{
    console.log(`listening on ${process.env.PORT}`)
})

app.use("/api/user",userRoutes)
app.use("/api/auth", authRoutes)