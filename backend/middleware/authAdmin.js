const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD

function adminMiddleware(req,res,next){
    const token=req.headers.token;
    if(!token){
        return res.satus(401).json({error:"Token not available"})
    }
    try{
    const validToken=jwt.verify(token,JWT_ADMIN_PASSWORD)
    req.adminId=validToken.id
    next()
    }
    catch(error){
        return req.status(404).json({error:"Signin required "})
    }
}

module.exports=adminMiddleware;
