require("dotenv").config();

require("./passport.js")
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./routes/auth.js");
const cors = require("cors");

const app = express();

//middleware    
app.use(
    session({
        secret: process.env.COOKIE_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Set to true if using HTTPS
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoutes);

app.get("/",(req,res)=>
    res.status(200).json({message:"Hello user"})
)
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
