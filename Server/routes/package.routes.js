import { Router } from "express";
import Package from "../models/package.model.js";

const router = Router();

router.post("/add", async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const checkPackage = await Package.findOne({ name })
    if (checkPackage) {
        return res.status(400).json({ msg: "A package with this name already exists." });
    }
    const newPackage = await new Package({ name, description, price });
    newPackage.save()
        .then(() => res.json("Package added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.get("/get", async (req, res) => {
    const packages = await Package.find();
    if (!packages) {
        return res.status(400).json({ msg: "No packages found." });
    }
    return res.json({ packages });
});

export default router;