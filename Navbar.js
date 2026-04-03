import React from "react";

export default function Navbar({ open }) {
  return (
    <div className="navbar">

      {/* LEFT SIDE → LOGO + NAME */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/logo.png" alt="logo" className="logo-img" />
        <div className="logo">LIVARA HOMES</div>
      </div>

      {/* RIGHT SIDE → MENU */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <a href="#about">About</a>
        <a href="#kitchen">Kitchens</a>
        <a href="#contact">Contact</a>

        <button className="btn" onClick={open}>Enquire</button>
      </div>

    </div>
  );
}