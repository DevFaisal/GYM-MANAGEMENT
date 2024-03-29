import { Router } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/register", async (req, res) => {
    const { name, parentage, address, phone, password, email } = req.body;
    if (!name || !parentage || !address || !email || !password || !phone) {
        return res.status(400).json({ message: "Not all fields have been entered." });
    }
    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ message: "An account with this email already exists." });
    }
    const newUser = await new User({ name, parentage, address, phone, email, password });

    newUser.save()
        .then(() => res.json("User registered!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/login", async (req, res) => {
    const { role, email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Not all fields have been entered." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ message: "No account with this email has been registered." });
    }
    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (!verifiedPassword) {
        return res.status(400).json({ message: "Invalid Password." });
    }
    if (role === "admin" && !user.isAdmin) {
        return res.status(400).json({ message: "Invalid Credentials." });
    }
    if (role === "member" && user.isAdmin) {
        return res.status(400).json({ message: "Invalid Credentials." });
    }

    return res.json({
        id: user._id,
        name: user.name,
        parentage: user.parentage,
        address: user.address,
        phone: user.phone,
        isAdmin: user.isAdmin,
        email: user.email,
    });

});

export default router;