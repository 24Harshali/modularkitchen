import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Book Free Consultation</h2>
      <form className="form">
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
        <input placeholder="Email Address" />
        <textarea placeholder="Tell us your requirement"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}