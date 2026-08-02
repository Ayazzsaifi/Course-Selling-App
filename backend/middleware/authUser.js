const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;


function UserMiddleware(req,res,next){
    const token=req.headers.token
    if(!token){
        return res.status(401).json({error:"token not available"})
    }
    try{
    const validToken= jwt.verify(token,JWT_USER_PASSWORD);
    req.userID=validToken.id 
    next();
    }
    catch(error){
        res.status(404).json({error:"Signin required"})
    }
}

module.exports = UserMiddleware; 
