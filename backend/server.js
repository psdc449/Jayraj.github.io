const express = require("express");
const app = express();
const chalk = require("chalk");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: true,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Database connection
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Importing routes
const userRoutes = require("./router/user.route");
const adminRoutes = require("./router/admin.route");
const paymentRoutes = require("./router/payment.route"); // Import payment routes

// Using routes
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/payments", paymentRoutes); // Setup payment routes

// Start server
app.listen(port, (err) => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green(`Server is running on port ${port}`));
  }
});
