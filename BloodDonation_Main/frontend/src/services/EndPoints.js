

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(BASE_URL);


export const AuthRoute = {
 REGISTER_API:BASE_URL+"/register",
 VERIFY_ACCOUNT:BASE_URL+"/verify-account",
 LOGIN_API:BASE_URL+"/login",
 SENT_OTP_API:BASE_URL+"/send-otp",
 FORGOT_PASSWORD_API:BASE_URL+"/change-password",
 LOGOUT_API:BASE_URL+"/logout"
  
};
