
const mongoose = require("mongoose")
// async function DatabaseConnection() {
//     try {
//         await mongoose.connect(process.env.DBURL);
//         console.log("db connection done!!!!")
//     }
//     catch (err) {
//         console.log("db connection failed", err)
//     }
// }
// module.exports=DatabaseConnection;


// with named exports
exports.DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("db connection done!!!!")
    }
    catch (err) {
        console.log("db connection failed", err)
    }
}