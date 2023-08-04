import User from "../models/user.js";
import mongoose from "mongoose";
const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send("ID unknown : " + id);
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error finding user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const updateUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
export default { createUser, deleteUser, updateUser, getUsers, getUserById };
