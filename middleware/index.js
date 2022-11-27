
const Middleware = async (req,res,next) =>{

    const authorizationClient = req.headers['authorization'];
    const token = authorizationClient && authorizationClient.split(' ')[1];
    if(!token) return res.status(403).json({
        data:"you don't have permision",
        statusMessage:"error"
    });

    next();


}

module.exports = {
    Middleware
}