import React, { useState } from "react";
import "./donate.css"; // optional CSS file

const CollectKhoon = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    mobile: "",
    bloodType: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation form data:", formData);
    alert("Form submitted! Check console for data.");
    // TODO: connect to backend API
  };

  return (
    <div className="donate-container">
      <form className="donate-form" onSubmit={handleSubmit}>
        <h2>Collect Khoon</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="donate-input"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="donate-input"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="donate-input"
        />

        <select
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          required
          className="donate-input"
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <textarea
          name="reason"
          placeholder="Reason for Donation"
          value={formData.reason}
          onChange={handleChange}
          required
          className="donate-input"
          rows="3"
        />

        <button type="submit" className="donate-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CollectKhoon;
