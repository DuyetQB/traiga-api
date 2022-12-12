const bcrypt = require("bcryptjs");
const ModelUser = require("../model/user");
const { generateTokens } = require("../utils/token")

const Login = async (req, res) => {
  try {
    const data = req.body;
    const tokens = generateTokens(data);
    console.log("tokens:",tokens);

    const user = await ModelUser.find({email:data.email})
   console.log("emailResponse:",user.email);
   console.log("data:",data);

    if(!user){
        return res.status(404).json({
            statusCode:"error",
            statusMessage:"your username/email incorrect"
        });
    }

    // if(await bcrypt.compare(data.password, user.password,(err,result)=>{
    //   if(err) throw err;
    //   return res.status(200).json({
    //     data:user,
    //     statusMessage:"ok"
    //   });
    // })){
    //   console.log("ok");
    // };
// const { password , ...other} = user;
    return res.status(200).json({
      data:user,
      statusMessage:"ok"
    });
  } catch (error) {
    console.log("err:", error);
  }
};

const Signup = async (req, res) => {
  try {

    const { username, email, password } = req.body;
    console.log("req body:", req.body);

    const passwordHash = (pass) => {
      return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
    };

    const createNewUser = new ModelUser({
      username: username,
      email: email,
      password: passwordHash(password),
    });

    await createNewUser.save();

    return res
      .status(201)
      .json({ data: [], statusMessage: "create a new user" });
  } catch (error) {
    if (error.code === 11000) {
      console.log("err:", error);
      return res
        .status(400)
        .json({ data: [], statusMessage: "email is duplicate" });
    }
  }
};

const Profile = async (req, res) => {
  try {
    const datasResponse = await ModelUser.find({});

    return res.status(200).json({ data: datasResponse, statusMessage: "ok" });
  } catch (error) {
    if (error.code === 11000) {
      console.log("err:", error);
      return res
        .status(400)
        .json({ data: [], statusMessage: "email is duplicate" });
    }
  }
};

module.exports = {
  Login,
  Signup,
  Profile,
};
