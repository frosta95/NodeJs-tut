const express = require("express");
const app = express();
const port = 3000;

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

app.get("/", (req, res) =>{
    res.send("Hello World!");
})

app.get("/api/customers", (req, res) =>{
    res.send({"people": people});
})

app.post("/" , (req, res) =>{
    res.send("This is a post request!");
})

app.listen(port, () => {
   console.log("App listening on port " + port + "...") ;
})