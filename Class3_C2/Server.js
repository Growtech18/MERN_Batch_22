
const express = require("express");
require("dotenv").config()

const app = express();


const port = process.env.PORT || 4000;

app.listen(port, () => {
    // console.log(`Server is running at ${port}`);
})



const { DatabaseConnection } = require("./configuration/DatabaseConnection.js");
DatabaseConnection()

// most imp 
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Namo nAMO")
})



//mount your routes
console.log("ham yha hai server me ")
const EmployeeRoutes=require("./routes/EmployeeRoutes.js")

app.use("/api/v1",EmployeeRoutes)
