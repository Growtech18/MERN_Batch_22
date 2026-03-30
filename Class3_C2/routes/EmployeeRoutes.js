//step-1
const express = require("express");

//step-2 get the router
const router = express.Router();


// step-3 import your controllers
const  insertEmployee = require("../controllers/EmployeeController.js")
console.log("me routes ke andar aa gya hu")


// step-4 method ka name batao, route banao or controller ko attach karo

router.post("/new-entry", insertEmployee);
console.log("routes ke neeche")
module.exports=router
