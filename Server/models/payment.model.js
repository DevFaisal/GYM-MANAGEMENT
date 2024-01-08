import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentDate: {
        type: Date,
        required: true,
    },
    paymentMonth: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;