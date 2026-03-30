
 function SignSuccessEmail(name) {
  console.log("ye template hai")
    return `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />

  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">


        <tr>
          <td align="center" style="background-color:#28a745; padding:30px;">
            <h1 style="margin:0; color:#ffffff; font-size:26px;">
              ✅ Success!
            </h1>
          </td>
        </tr>


        <tr>
          <td style="padding:30px; color:#333333;">
            <p style="font-size:16px; line-height:1.6; margin:0 0 15px;">
              Hello,
            </p>

            <p style="font-size:16px; line-height:1.6; margin:0 0 15px;">
            Dear ${name}
              We’re happy to let you know that your request has been <strong>successfully completed</strong>.
            </p>

            <div style="background-color:#e9f9ef; border-left:4px solid #28a745; padding:15px; margin:20px 0;">
              <p style="margin:0; font-size:15px; color:#155724;">
                ✔ Everything went smoothly. No further action is required from you.
              </p>
            </div>

            <p style="font-size:16px; line-height:1.6; margin:0 0 25px;">
              If you have any questions or need help, feel free to contact our support team.
            </p>

            <!-- Button -->
            <div style="text-align:center;">
              <a href="#" style="
                display:inline-block;
                padding:12px 25px;
                background-color:#28a745;
                color:#ffffff;
                text-decoration:none;
                font-size:16px;
                border-radius:5px;
              ">
                Go to Dashboard
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="background-color:#f1f1f1; padding:15px; font-size:13px; color:#777777;">
            © 2026 Your Company Name. All rights reserved.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>


  </body>
</html>
    `

}

module.exports = SignSuccessEmail;