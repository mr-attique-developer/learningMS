

import mongoose, { mongo } from "mongoose";


export const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo db connected successfuly ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        console.log("Error in mongo db connection")
    }
}