import React from "react";
import EnquiryForm from "./EnquiryForm";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        {/* 🔥 MAIN CARD */}
        <div className="contact-card">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>Let’s Build Your Dream Space</h2>
            <p>
              Premium modular kitchens & interiors crafted with perfection.
            </p>

            <div className="contact-details">
              <p>📞 +91 9699837517</p>
              <p>📞 +91 9763706429</p>
              <p>📧 livarahomes95@gmail.com</p>
              <p>📍 Pune, India</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="form-box">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
}