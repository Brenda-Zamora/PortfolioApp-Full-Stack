import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import errorHandler from "./error.controller.js";

const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status("401").json({ error: "User not found" });
    if (!user.authenticate(req.body.password))
      return res
        .status("401")
        .json({ error: "Email and password don't match." });

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      config.jwtSecret
    );
    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    const errorMessage = errorHandler.getErrorMessage(err);
    console.error("Signin error:", errorMessage);
    return res.status("401").json({ error: "Could not sign in" });
  }
};
const signout = (req, res) => {
  res.clearCookie("t", {
    path: "/",
    httpOnly: true,
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res.status(200).json({
    message: "Signed out successfully",
  });
};

const requireSignin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Authorization header missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, config.jwtSecret);

    req.auth = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({
      error: "User is not authorized",
    });
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (req.auth && req.auth.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: "Admin access required ❌" });
  }
};

export default { signin, signout, requireSignin, hasAuthorization, isAdmin };
