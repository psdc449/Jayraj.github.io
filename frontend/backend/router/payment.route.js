// routes/payment.routes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment.control");

router.post("/register", paymentController.createPayment);
router.get("/all", paymentController.getAllPayments);
router.patch("/update/:id", paymentController.updatePaymentStatus);
router.delete("/delete/:id", paymentController.deletePayment);

module.exports = router;
