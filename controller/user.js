
const bcrypt = require('bcrypt');
const ModelUser = require("../model/user");


const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60s",
    });

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1h",
    });

    return { accessToken, refreshToken };
};

const Login = async (req, res) => {
  try {
    const data = req.body;
    console.log("dataaa:".data)
    // const tokens = generateTokens(data);

    // const emailResponse = await ModelUser.find({email:data.email,username:data.username})
    // console.log("emailResponse:",emailResponse);


    // if(!emailResponse){
    //     return res.status(404).json({
    //         data:"your username/email incorrect",
    //         statusMessage:"error"
    //     });
    // }

    // bcrypt.compare(data.password, hash, function(err, result) {
    //     if(err) console.log("error:",err)
    //     // result == true
    //     console.log("bcrypt result",result);
    // });

     return res.status(200).json("ok");
  } catch (error) {
    console.log("err:", error);
  }
};

const Signup = async (req, res) => {
    try {
    //   const datasResponse = await ModelUser.find({});

   const { username , email, password } = req.body;

   const passwordHash = (pass) =>{
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
   }

   const createNewUser = new ModelUser({
    username:username,
    email:email,
    password:passwordHash(password),
...ModelUser

   });


      return res.status(200).json({ data: createNewUser, statusMessage: "create a new user" });
    } catch (error) {
      console.log("err:", error);
    }
  };
  
const Profile = async (req, res) => {
    try {
      const datasResponse = await ModelUser.find({});
  
      return res.status(200).json({ data: datasResponse, statusMessage: "ok" });
    } catch (error) {
      console.log("err:", error);
    }
  };
  

module.exports = {
    Login,
    Signup,
    Profile
}