const express = require("express");
require("dotenv").config();
const database = require("./configuration/database.js")
const userRoutes = require("./routes/UserRoutes.js")
const authRoutes=require("./routes/AuthRoutes.js")
const app = express();
const Port = process.env.PORT || 4000;

app.listen(Port, () => {
    console.log("server is running at port", Port)
})
app.use(express.json());
database();
console.log("data")

app.get("/", (request, response) => {
    response.send("Home page sdfdg");
})


app.use("/api/v1",userRoutes)

app.use("/api/v1/auth",authRoutes)