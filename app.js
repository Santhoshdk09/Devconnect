
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./utils/validation");
const validateSignupData = require("./utils/validation");


const jwt = require("jsonwebtoken");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use(express.json());

connectDB()
     .then(()=>{
        console.log("database connection established sucessfully");
    app.listen(3000, ()=>{
            console.log("server is running sucessfully on port 3000... ");
        });
    })
     
    .catch((err) => {
        console.log("database not conected", err.message);

     });