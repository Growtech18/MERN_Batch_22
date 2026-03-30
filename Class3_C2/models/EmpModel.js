const mongoose = require("mongoose");


// create karo model(collection) ko db ke andar

console.log("me model me aaya")
const employeeSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Age: { type: Number },
    Position: { type: String, required: true },
    Salary: { type: Number },
})

module.exports = mongoose.model("Employee", employeeSchema)