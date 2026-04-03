import React from "react";

export default function Hero({ open }) {
  return (
    <div className="hero">
      <h1>Where Design Meets Living</h1>
      <p>Premium Modular Kitchens & Interiors by Livara Homes</p>
      <button className="btn" onClick={open}>Get Free Design</button>
    </div>
  );
}