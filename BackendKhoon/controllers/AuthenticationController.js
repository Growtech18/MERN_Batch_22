//signup
const crypto = require("crypto");
const bcrypt=require("bcrypt")
const MailKarDo = require('../utils/MailKarDo.js');
const User = require("../models/UserModel.js");

async function Signup(req, res) {
    console.log("yha me aaya hai")
    try {
        // Data ko nikalo 
        const { fullName, email, password, role } = req.body;


        // data ko verify kar lo


        if (fullName === "" || email === "" || password === "" || role === "") {
            return response.status(500).json({
                success: false,
                message: `Please enter the value of all the field like  fullName, email, password, role,verifyOtp `,

            })
        }

        // check kar lo email ek valid email hai ya nhi hai 

        // ek otp me generate karunga 

        const otp = crypto.randomInt(100000, 999999);



        // us otp ko me user ke mail bhjeunga 
        await MailKarDo(email, "Otp Email", otp, fullName, "otp")
        console.log("me yha aa ya hu")

        // check karo ki ye email se account pahle se bna hua hai kya agar ha to aap dusri email se signup karo 
        const isUserExist = await User.findOne({email});
        console.log( "data of dala hua db ke andaer ",isUserExist)
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: `This email id is already registered with us please use other email id `,

            })
        }




        //agar yha tak aa gaye hai to me apne data ko encrypt karunga (jaise meri email id and password ko encrypt kar dunga)
        let difficultPassWord;

        try{

            difficultPassWord=await bcrypt.hash(password,10)

        }
        catch(err){
            console.log("Got error while encripting the password",err)

        }


        //to me deee gai info se singup kar jaunga 
        const newUser = await User.create({ fullName, email, password:difficultPassWord, role, otp })



        // at the end me user ko ek response de dunga 
        return res.status(201).json({
            message: "signup ho gya hai",
            data: newUser
        })

    }

    catch (error) {
        console.log("Singup controller me error", error);

        return res.status(500).json({
            success: false,
            message: "Internal servr error",
            error: error.message
        })
    }

}

module.exports = { Signup }



//login



//verify account using otp



// forgot password using otp


// channge password