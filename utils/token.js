const jwt = require("jsonwebtoken");


const generateAccessToken = (payload) => {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "24h",
    });

     return  accessToken;
};
const generateRefreshToken = (payload) => {

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "360d",
    });

     return refreshToken;
};

const refreshTokenService = (payload) => {

    const service = new Promise((resolve,reject) =>{
        try {

            const refreshToken = jwt.verify(payload, process.env.REFRESH_TOKEN_SECRET,(error,user)=>{
        if(error){
            return reject(404).json({
            status:"error",
            statusMessage:"the refresh token is invalid"
            })
        }

        if(user) {
            console.log("user:",user);
        }
        resolve(refreshToken);
    });
        } catch (error) {
            reject(error)
        }
    })
    
     return service;
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    refreshTokenService
}