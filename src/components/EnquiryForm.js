import React, { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Future: API call here
    console.log(formData);

    alert("We will contact you soon!");
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>

      {/* 🔥 HEADER */}
      <div className="form-header">
        <h3>Free Design Consultation</h3>
        <p>Get expert advice for your dream interiors</p>
      </div>

      {/* 🔥 NAME */}
      <div className="input-group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* 🔥 PHONE */}
      <div className="input-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* 🔥 CITY */}
      <div className="input-group">
        <label htmlFor="city">City *</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      {/* 🔥 BUTTON */}
      <button type="submit" className="submit-btn">
        Request Call Back
      </button>

    </form>
  );
}