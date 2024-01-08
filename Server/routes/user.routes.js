import { Router } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/register", async (req, res) => {
    const { name, parentage, address, password } = req.body;
    const email = req.body.email.toLowerCase();
    if (!name || !parentage || !address || !email || !password) {
        return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ msg: "An account with this email already exists." });
    }
    const newUser = await new User({ name, parentage, address, email, password });

    newUser.save()
        .then(() => res.json("User registered!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ msg: "No account with this email has been registered." });
    }
    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (!verifiedPassword) {
        return res.status(400).json({ msg: "Invalid Password." });
    }

    return res.json({
        user: {
            id: user._id,
            name: user.name,
            parentage: user.parentage,
            address: user.address,
            email: user.email,
        }
    });

});

export default router;