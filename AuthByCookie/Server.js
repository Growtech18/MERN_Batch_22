const express = require("express");
require("dotenv").config()
const DatabaseConnection = require("./configuration/Database.js")
const authRoute = require("./routes/AuthRoute.js")
const app = express()
const port = process.env.PORT || 3000;
const cookie = require("cookie-parser")
app.listen(port, () => {
    console.log(`Server start at ${port}`);
})

app.use(express.json())
app.use(cookie());



DatabaseConnection();

app.use("/api/v1", authRoute)


app.get("/", (req, res) => {
    res.json({
        message: "We are running"
    })
})