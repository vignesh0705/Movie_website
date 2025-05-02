const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv").config();
const app = express();
const PORT =5000;


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

app.use(express.json());
app.use(cors());

app.post("/Signup", async (req, res) => {
    try {
        var {username, email, password} = req.body;
        var newUser = new User({username, email, password});
        await newUser.save();
        res.status(201).json({message: true});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: false});
    }
});
app.post("/login", async (req, res) => {
    try {
        var {email, password} = req.body;
        var user = await User.findOne({email:email});
        if (user1 && user1.password === password) {
            res.status(200).json({message: true});
        } else {
            res.status(200).json({message: false});
        }
    } catch(err){
        console.log(err);
        res.status(201).json({message:false});
    }
});
app.post("/addToWatchlist", async (req, res) => {
    try {
        var {email, movie} = req.body;
        var user = await User.find({email:email});
        if (user) {
            user[0].watchlist.push(movie);
            await user[0].save();
            res.status(200).json({message: true});
        } else {
            res.status(200).json({message: false});
        }
    } catch(err){
        console.log(err);
        res.status(201).json({message:false});
    }
});
app.post("/removeFromWatchlist", async (req, res) => {
    try {
        var {email, movie} = req.body;
        var user = await User
.find({email:email});
        if (user) {
            user[0].watchlist = user[0].watchlist.filter((item) => item !== movie);
            await user[0].save();
            res.status(200).json({message: true});
        } else {
            res.status(200).json({message: false});
        }
    }
    catch(err){
        console.log(err);
        res.status(201).json({message:false});
    }
});


