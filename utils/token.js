const jwt = require("jsonwebtoken");


const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30s",
    });

    // const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    //     expiresIn: "1h",
    // });

    // return { accessToken, refreshToken };
     return { accessToken };
};

module.exports = {
    generateTokens
}