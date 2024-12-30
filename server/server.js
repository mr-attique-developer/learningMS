import express from "express"
import "dotenv/config"
import cors from "cors"
import { connectDB } from "./mongoDB/connection.js"


const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.send("Hello World from backend")
})


// connection db

connectDB()

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})