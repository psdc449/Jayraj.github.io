// payment.controller.js
const Payment = require("../models/payment.model");

// Create a new payment record
exports.createPayment = async (req, res) => {
    try {
        const { username, mobileno, address, paymentMethod, joiningDate, plan } = req.body;

        const newPayment = new Payment({
            username,
            mobileno,
            address,
            paymentMethod,
            joiningDate,
            plan,
        });

        const savedPayment = await newPayment.save();
        res.status(201).json({
            message: "Payment record created successfully",
            payment: savedPayment,
        });
    } catch (error) {
        console.error("Error creating payment record:", error);
        res.status(500).json({
            message: "Failed to create payment record",
            error: error.message,
        });
    }
};

// Get all payment records
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        console.error("Error fetching payment records:", error);
        res.status(500).json({
            message: "Failed to fetch payment records",
            error: error.message,
        });
    }
};

// Update a payment status
exports.updatePaymentStatus = async (req, res) => {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    try {
        const updatedPayment = await Payment.findByIdAndUpdate(
            id,
            { paymentStatus },
            { new: true }
        );

        if (!updatedPayment) {
            return res.status(404).json({ message: "Payment record not found" });
        }

        res.status(200).json({
            message: "Payment status updated successfully",
            payment: updatedPayment,
        });
    } catch (error) {
        console.error("Error updating payment status:", error);
        res.status(500).json({
            message: "Failed to update payment status",
            error: error.message,
        });
    }
};

// Delete a payment record
exports.deletePayment = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPayment = await Payment.findByIdAndDelete(id);

        if (!deletedPayment) {
            return res.status(404).json({ message: "Payment record not found" });
        }

        res.status(200).json({
            message: "Payment record deleted successfully",
            payment: deletedPayment,
        });
    } catch (error) {
        console.error("Error deleting payment record:", error);
        res.status(500).json({
            message: "Failed to delete payment record",
            error: error.message,
        });
    }
};
