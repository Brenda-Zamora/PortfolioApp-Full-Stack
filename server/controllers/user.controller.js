import User from "../models/user.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

// This function will be used to add a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password; // Use the virtual setter for password

    await newUser.save();

    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(400).json({
      message: "Error al crear el usuario",
      error: err.message,
      full: err,
    });
  }
};

// This function will be used to get a list of all users
const list = async (req, res) => {
  try {
    let users = await User.find().select("name email updated created");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// This function will be used to find a user by ID
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status(400).json({
        error: "User not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};

// This function will be used to read a user's profile
const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

// This function will be used to update a user's profile
const update = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// This function will be used to remove a user
const remove = async (req, res) => {
  try {
    let user = req.profile;
    let deletedUser = await user.deleteOne();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { createUser, userByID, read, list, remove, update };
