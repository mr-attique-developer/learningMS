import jwt from "jsonwebtoken"


export const authMiddleware = (req, res, next) => {



    const token = req.cookies.token
console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Access Denied please login to get token" })
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        console.log(verified)
        req.id = verified.id
        next()
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" })
    }
}