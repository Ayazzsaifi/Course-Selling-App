const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const jwt = require("jsonwebtoken");   
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userRoutes = require("./Router/user");
const courseRoutes = require("./Router/course");
const adminRoutes = require("./Router/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/admin", adminRoutes);

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000);
    console.log("Server is running on port 3000");
}

main();