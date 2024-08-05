require("dotenv").config();

const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetUp= require("./passport.js");
const authRoutes = require("./routes/auth.js")

const app = express();
app.use(
    cookieSession({
        name: "session",
        keys: ["acid"],
        maxAge: 24 * 60 * 60 * 100,
    })
)

app.use(passport.initialize())
app.use(passport.session())


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
)
app.use('/auth', authRoutes)

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Port is running on ${port}`);

})