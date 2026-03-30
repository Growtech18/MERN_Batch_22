import React, { useState } from "react";
import "./login.css"; // import your external CSS
import { login } from "../services/operations/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";
const Login = () => {
  
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    await login(formData, setLoading, navigate,dispatch)
    dispatch(setToken(localStorage.getItem("token")))
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          {loading ? "Logging" : "Login"}

        </button>
      </form>
    </div>
  );
};

export default Login;
