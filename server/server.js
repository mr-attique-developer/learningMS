import express from "express"
import "dotenv/config"
import cors from "cors"
import { connectDB } from "./mongoDB/connection.js"
import UserRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use("/api/v1/auth",UserRoutes)


app.get("/", (req, res) => {
    res.send("Hello World from backend")
})


// connection db

connectDB()

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})