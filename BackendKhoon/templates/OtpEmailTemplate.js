function OtpEmailTemplate(name, otp){
    return ` 
    <!DOCTYPE html>
    <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Email OTP Verification</title>
  </head>
<body>
   <span>Dear ${name} ,<span>
    <br>
    <p>Thank you for registering with us please use below otp to verify your account.</p>
    <p>this is otp -:<b>${otp}</b></p>

</body>
    `
}

module.exports=OtpEmailTemplate;