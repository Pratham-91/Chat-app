import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async(req,response,next)=>{
    try {
        const token = req.cookies.jwt;
        if (!token){
            return response.status(401).json({error: "Unathorized - no token provided "});
        }
        const decoded = jwt.verify (token,process.env.JWT_SECRET)

        if(!decoded){
            return response.status(401).json({error: "Unathorized - Invalid Token "})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return response.status(404).json({error: "User not found"});
        }

        req.user = user;

        next();

    }catch(error){
        console.log("Error in protectRoute middleware", error.message)
        res.status(500).json({error: "Internal server error "});
    }

}

export default protectRoute;