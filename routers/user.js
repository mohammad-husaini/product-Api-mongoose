import express from "express";
const router = express.Router();
import User from "../controllers/user.js";

router.get("/", User.getUsers);

router.get("/:id", User.getUserById);

router.post("/", User.createUser);

router.put("/:id", User.updateUser);

router.delete("/:id", User.deleteUser);

export default router;
