const User = require("../models/UserModel.js")

async function registerUser(request, response) {
    console.log("bom bom");

    const { name, age, email, password } = request.body
    console.log("this ", name, age, email, password)
    try {
        if (name === "" || email === "") {
            return response.status(500).json({
                success: false,
                message: `required name value is : ${name} & email value : ${email} feilds`,

            })
        }
        const data = await User.create({
            name, age, email, password
        })
        return response.status(201).json({
            success: true,
            message: "User created Success",
            user: data
        })
    } catch (error) {
        console.log("Register User has some issue");

        return response.status(500).json({
            success: false,
            message: "Internal servr error",
            error: error.message
        })
    }
}


async function allUser(request, response) {

    try {

        const data = await User.find().limit(2);
        if (data.length === 0) {
            return response.status(201).json({
                success: false,
                message: "ddata does not exist",
            })
        }
        return response.status(200).json({
            success: true,
            message: "All User data",
            users: data
        })
    } catch (error) {
        console.log("Register User has some issue");

        return response.status(500).json({
            success: false,
            message: "Internal servr error",
            error: error.message
        })
    }
}


async function deleteUser(request, response) {

    try {
        const { id } = request.body;
        if (id === "") {
            return response.status(400).json({
                success: false,
                message: "Id is empty"
            })
        }


        // check the details 
        const isUserExist = await User.findOne({ _id: id });
        if (!isUserExist) {
            return response.status(404).json({
                success: false,
                message: "No user exist with given id"
            })
        }
        await User.findByIdAndDelete({ _id: id });

        return response.status(200).json({
            success: true,
            message: "User deleted Successfully",
        })
    } catch (error) {
        console.log("Register User has some issue");

        return response.status(500).json({
            success: false,
            message: "Internal servr error",
            error: error.message
        })
    }
}

async function updateUser(request, response) {

    try {
        const { name, password, id } = request.body;
        if (id === "" || name === "" || password === "") {
            return response.status(400).json({
                success: false,
                message: `required name value is : ${name} & email value : ${email}  and id value is :${id}feilds`,
            })
        }


        // check the details 
        const isUserExist = await User.findOne({ _id: id });
        if (!isUserExist) {
            return response.status(404).json({
                success: false,
                message: "No user exist with given id"
            })
        }
        const data = await User.findByIdAndUpdate({ _id: id }, { name, password });
        // get the latest object


        return response.status(200).json({
            success: true,
            message: "User details updated Successfully",
            updatedUser: data
        })
    } catch (error) {
        console.log("Register User has some issue");

        return response.status(500).json({
            success: false,
            message: "Internal servr error",
            error: error.message
        })
    }
}
module.exports = { registerUser, allUser, deleteUser, updateUser };