const transporter = require("../configuration/emailConfiguration.js");
const SignSuccessEmail = require("../templates/SignSuccessEmail.js");
const OtpEmailTemplate = require("../templates/OtpEmailTemplate.js")
async function MailKarDo(email, emailSubject, otp, name, typeOfMail) {

    try {
        let emailHtmlCode;
        if (typeOfMail === 'otp') {
            emailHtmlCode = OtpEmailTemplate(name,otp);
        }
        if(typeOfMail==='registration'){
            emailHtmlCode = SignSuccessEmail(name);
        }

        transporter.sendMail({
            to: email,
            subject: emailSubject,
            html: `${emailHtmlCode}`
        })
        // console.log("@@@@@@@@@@@@@@@@@@@me yha aaya hu kya")

    } catch (error) {
      
        console.log("errror message in email", error.message)

    }
}

module.exports = MailKarDo;