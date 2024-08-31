const jwt = require("jsonwebtoken");
const usermodel = require("../models/user.model");

exports.auth = async(req, res, next) => {
  // const token = req.header('Authorization')?.split(' ')[1];
  //   const token = req.headers.authorization.split(" ")[1];
  const token = req.cookies.token;
  if (!token) {
    const error = {
      status: 401,
      message: "Access denied. No token provided.",
    };
    return res.send(error);
  } else {
    try {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      const user= await usermodel.findById(verified.id)
      req.user = user;
      next();
    } catch (err) {
      const error = {
        status: err.status,
        message: "Invalid token",
      };
      return res.send(error);
    }
  }
};
exports.admin = (req, res, next) => {
  console.log(req.user.role);
  
  if (req.user.role !== "admin")
    return res.status(403).send("Access Denied: You are not an Admin!");
  next();
};
