const Employee = require("../models/EmpModel.js")


async function insertEmployee(req, res){

    try {
        console.log("me controller ke andar hu")
        // step-1 info nikal lao body se 
                console.log(req.body)
        const { Name, Age, Position, Salary } = req.body;


        //step-2 verify kar lo data ko
        if (Name === '' || Position === '') {
            return res.status(204).json({
                success: false,
                message: `name-: ${Name} and position- ${Position} are getting empty or undefined `
            })
        }

        // step-3 agar sab shi hai to aap data ko collection me daal do 
        const eData = await Employee.create({ Name, Age, Position, Salary });
      
        //step-4 user ko ui me data dikhana hai to uske leaye json response return kar do
        return res.status(201).json({
            success: true,
            message: `Employee cxreated successfully`,
            data: eData
        })

    }

    catch (error) {
        console.log("Error Occured in insertEmployee function");
        res.status(500).json({
            success: false,
            message: "Code fat gya gai",
            error: error?.message
        })
    }


}

module.exports=insertEmployee