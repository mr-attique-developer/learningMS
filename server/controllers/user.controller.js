import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const registerController = async (req, res) => {
    try {
        const {username,email,password,role} = req.body
        if(!username || !email || !password){
            return res.status(400).json({message: "Please fill all fields"})
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
const user = new User({
            username,
            email,
            password: hashedPassword,
            role
        })
        await user.save()

        res.status(201).json({
            message: "User registered successfully",
            user
        })
    } catch (error) {
        console.log(error)
        console.log("Error in registerController")
    }
}
