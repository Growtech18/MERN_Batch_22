const mongoose = require("mongoose");

async function DatabaseConnectivity() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connection done")
    } catch (error) {
        console.error("error occured due to the",error);
        
    }
    
}

module.exports = DatabaseConnectivity;