import React, { useState } from "react";

export default function EnquiryForm({ closePopup }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://your-api-endpoint.com/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Enquiry Sent Successfully!");
    if (closePopup) closePopup();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4 text-orange-600">Get Free Design</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border mb-2 rounded" required />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border mb-2 rounded" required />
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border mb-2 rounded" />
      <textarea name="message" placeholder="Requirement" onChange={handleChange} className="w-full p-2 border mb-3 rounded" />
      <button className="bg-orange-500 text-white w-full py-2 rounded">Submit</button>
    </form>
  );
}
