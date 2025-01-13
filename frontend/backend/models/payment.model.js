// payment.model.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    mobileno: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ["Credit Card", "Debit Card", "Net Banking"],
        required: true,
    },
    joiningDate: {
        type: Date,
        required: true,
    },
    plan: {
        type: String,
        enum: ["BEGINNER PLAN", "PREMIUM PLAN", "ULTIMATE PLAN"],
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
