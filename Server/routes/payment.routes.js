import { Router } from "express";
import Payment from "../models/payment.model.js";

const router = Router();

router.post("/pay", async (req, res) => {
    const { user, paymentMethod, paymentDate, paymentMonth, amount } = req.body;
    const payment = await new Payment({
        user,
        paymentMethod,
        paymentDate,
        paymentMonth,
        amount
    });
    const createdPayment = await payment.save();
    if (createdPayment) {
        return res.status(201).json({ msg: "Payment created successfully." });
    }
    return res.status(500).json({ msg: "Something went wrong." });
});

export default router;