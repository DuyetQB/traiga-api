const bcrypt = require("bcryptjs");
const ModelUser = require("../model/user");
const {
  generateAccessToken,
  generateRefreshToken,
  refreshTokenService,
} = require("../utils/token");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const user = await ModelUser.findOne({ email: req.body.email});

    if (!user) {
      return res.status(500).json({
        statusCode: "error",
        statusMessage: "your username/email incorrect",
      });
    }
    const { password, ...other } = user._doc;

    if (!(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(500).json({
        statusCode: "error",
        statusMessage: "your password incorrect",
      });
    }

    const accessToken = generateAccessToken({
      email: req.body.email,
      id: other._id,
    });
    const refreshToken = generateRefreshToken({
      email: req.body.email,
      id: other._id,
    });

    return res.status(200).json({
      data: other,
      statusMessage: "ok",
      accessToken: accessToken,
      refreshToken: refreshToken,
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

const userRefreshToken = async (req, res) => {
  try {
    const { token } = req.headers;
    console.log("token:", typeof token);
    // console.log("req.headers:", req.headers);
    if (token) {
      const response = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
      console.log("responseresponse:", response);
      if (response) {
        const newAccessToken = generateAccessToken({
          username: req.body.username,
          email: req.body.email,
          id: response.id,
        });
        return res.status(200).json({
          accessToken: newAccessToken,
        });
      }
      res.status(200).json({
        token: response,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  Login,
  Signup,
  Profile,
  userRefreshToken,
};
