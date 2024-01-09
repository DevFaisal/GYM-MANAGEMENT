import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

router.get("/start", async (req, res) => {
    const users = await User.find().select("-password -email -createdAt -updatedAt -__v");
    if (!users) {
        return res.status(400).json({ message: "No users found." });
    }
    return res.json({ users });
});

export default router;