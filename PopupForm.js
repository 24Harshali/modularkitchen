import React from "react";

export default function PopupForm({ show, close }) {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-box">

        {/* ❌ CLOSE BUTTON */}
        <button className="close-btn" onClick={close}>×</button>

        <h3>Get Free Kitchen Design</h3>

        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />

        <button className="btn" onClick={close}>Submit</button>

      </div>
    </div>
  );
}