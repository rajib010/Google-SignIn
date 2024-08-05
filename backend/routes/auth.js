const router = require("express").Router();
const passport = require("passport");
const password = require('passport');


router.get("/login/success", (req, res) => {
    console.log("Login success route hit");
    if (req.user) {
        console.log("User data:", req.user);
        res.status(200).json({
            error: false,
            message: "Logged in successfully",
            user: req.user,
        });
    } else {
        res.status(403).json({
            error: true,
            message: "Not Authorized",
        });
    }
});



router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failure",
    });
})

router.get(
    "/google/callback",
    password.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
)

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect(process.env.CLIENT_URL)
});

module.exports = router