const jwt = require("jsonwebtoken");
const Middleware = async (req,res,next) =>{
    try {
        const authorizationClient = req.headers['authorization'];
        const token = authorizationClient && authorizationClient.split(' ')[1];
        if(!token) return res.status(403).json({
            status:"error",
            statusMessage:"you don't have permision"
        });
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // console.log("decoded:",decoded);
        // req.userId = decoded.id
        next();
        
    } catch (error) {
        if(error) return res.status(401).json({
            status:"error",
            statusMessage:"the user is not authentication"
        })
    }

}

module.exports = {
    Middleware
}