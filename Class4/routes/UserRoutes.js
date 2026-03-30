const express = require("express");
const {registerUser,allUser,deleteUser,updateUser} = require("../controllers/UserController.js")

const UserRouter = express.Router();

UserRouter.post("/register",registerUser);
UserRouter.get("/all-user",allUser);
UserRouter.delete("/delete-user",deleteUser);
UserRouter.put("/update-user",updateUser);
UserRouter.get("/register",(request,response)=>{
    response.send("demo routes")
});


module.exports = UserRouter;