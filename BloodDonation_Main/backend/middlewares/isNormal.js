const jwt = require("jsonwebtoken")
function isNormal(req, res, next) {
    try {
        console.log("Owner middlerawaere")
        const role = req.role;
        console.log(req.role)
        if (role !== 'normal') {
            return res.json({
                message: "You are not a authorize person",
                error: error.message,
                success: false
            })
            next()

        }
    }
    catch (error) {
        console.log("got error in NORMAL middleware");
        return res.status(423).json({
            message: "You are not a authorize person",
            error: error.message,
            success: false
        })
    }
}

module.exports = isNormal;
