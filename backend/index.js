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

const cors = require("cors");
app.use(cors());


app.use((err, req, res, next) => {
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({ message: "Invalid or empty JSON body" });
    }
    next(err);
});



app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/admin", adminRoutes);

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`Server is running on port ${port}`);
}

main();