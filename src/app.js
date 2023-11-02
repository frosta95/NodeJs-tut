const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./models/customer");
const app = express();

mongoose.set("strictQuery", false);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const PORT = process.env.port || 3000;
const CONNECTION = process.env.CONNECTION;

const people = [
    {
        "name" : "Caleb",
        "industry" : "music"
    },
    {
        "name" : "John",
        "industry" : "networking"
    },
    {
        "name" : "Sully",
        "industry" : "sports medicine"
    }
];

const customer = new Customer({
    name: "John",
    industry: "marketing"
});

//customer.save();

app.get("/", (req, res) =>{
    res.send("Welcome!");
});

try {
    app.get("/api/customer", async(req, res) =>{
        const result = await Customer.find();
        res.json({"customers": result});
    });
} catch (err) {
    res.status(500).json({error: e.message});
}

app.post("/api/customer", (req, res) =>{
    console.log(req.body);
    res.send(req.body);
});

app.post("/" , (req, res) =>{
    res.send("This is a post request!");
});

const start = async() => {
    try {
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
        console.log("App listening on port " + PORT + "...") ;
    });
    } catch (err) {
        console.log(err.message);
    }
};

start();