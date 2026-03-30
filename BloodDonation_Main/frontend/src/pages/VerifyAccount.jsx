import React, { useContext, useState } from "react";
import "../components/Login.css"; // import your external CSS
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { verifyAcc } from "../services/operations/VerifyAcc";
const VerifyAccount = () => {
  const [loading, setLoading] = useState(false);

    const {user} = useSelector((state)=>state.auth)
    
    const navigate = useNavigate()
    const data = useContext(myContext)
    console.log(data)
    const [formData, setFormData] = useState({
        email: user?.user?.email,
        otp: "",
    });
console.log(formData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
        await verifyAcc(formData,setLoading,navigate);

    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Verify Account</h2>

                <input
                    type="text"
                    name="otp"
                    placeholder="enter otp"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                    className="auth-input"
                />



                <button type="submit" className="auth-button">
                    Verify
                </button>
                <button type="submit" className="auth-button">
                    resend otp
                </button>
                <button type="submit" className="auth-button" onClick={() => {
                    navigate("/login")
                }}>
                    back to login
                </button>
            </form>
        </div>
    );
};

export default VerifyAccount;
