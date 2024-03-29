import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    parentage: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, unique: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true },
}, {
    timestamps: true,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", userSchema);

export default User;