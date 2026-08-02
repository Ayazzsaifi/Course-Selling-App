const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { userModel, courseModel } = require("../db")
const { purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const auth = require("../middleware/authUser");
const UserMiddleware = require("../middleware/authUser");

router.post("/signup", async function (req, res) {
    const { firstName, lastName, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10) // make sure you add lasting (10) is more like a default

    try {
        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName

        })

        res.json({ message: "Youre SignUp" })
    }
    catch (error) {
        res.json({error: "signUp failed"})
    }

})



router.post("/signin", async function (req, res) {
    const { email, firstName, lastName, password } = req.body

    const userExit = await userModel.findOne({ email })
    if (!userExit) {
        return res.json({ message: "User Not exist" })
    }
    else {
        const validPassword = bcrypt.compare(password,userExit.password)
        if (!validPassword) {
            return res.json({ error: "Incorrect password" })
        }
        else {
            const token = jwt.sign({ id: userExit._id }, JWT_USER_PASSWORD, { expiresIn: "7d" })
            return res.json({ token: token })
        }
    }
})


router.get("/purchase", UserMiddleware, async function (req, res) {
    const userId= req.userID;

    const ownCourses = await purchaseModel.find({ userId:req.userID });
    res.json({ ownCourses });
});


module.exports = router;