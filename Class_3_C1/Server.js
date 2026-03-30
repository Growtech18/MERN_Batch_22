// step-1 
const express = require("express");
require("dotenv").config()
// step-2
const app = express();

//step-3
const port = process.env.PORT || 4000;

// step-4
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})


// step-5
// Best Practice
const {DatabaseConnection} = require("./configuration/DatabaseConnection.js");
DatabaseConnection()


const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    isActive: true
};

app.get("/", (req, res) => {
    res.json({
        data: user
    })
})

