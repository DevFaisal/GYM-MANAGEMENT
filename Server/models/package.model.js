import mongoose from "mongoose";

const packageSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});

const Package = mongoose.model("Package", packageSchema);

export default Package;