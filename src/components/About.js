import React, { useState } from "react";
import "../styles.css";

export default function About() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
  ];

  return (
    <div className="about-section" id="about">

      <h2 className="about-title">About Livara Homes</h2>

      <p className="about-text">
        Every space begins as a blank canvas. At Livara Homes, we design
        thoughtful interiors that combine functionality, elegance, and comfort.
        With modern technology, premium materials, and expert craftsmanship,
        we transform spaces into beautiful homes.
      </p>

      {/* IMAGE GRID */}
      <div className="about-row">
        {images.map((img, index) => (
          <div
            className="about-card"
            key={index}
            onClick={() => setActiveImg(img)}
          >
            <img src={img} alt="interior" />
          </div>
        ))}
      </div>

      {/* PREMIUM SECTION */}
      <div className="about-premium">

        <div className="premium-border"></div>

        <p className="premium-text">
          In 2021, we began our journey with a simple vision—to go beyond ordinary living.
          Through knowledge, innovation, and modern design, we create thoughtful,
          functional, and refined spaces that truly feel like home.
        </p>

        <div className="premium-stats">

          <div className="stat">
            <span>👥</span>
            <p>150+ Satisfied clients<br />as part of our family</p>
          </div>

          <div className="stat">
            <span>📍</span>
            <p>1 Showroom<br />Pune</p>
          </div>

          <div className="stat">
            <span>🏭</span>
            <p>Central<br />Manufacturing Unit</p>
          </div>

          <div className="stat">
            <span>💻</span>
            <p>Software Driven<br />Standard Pricing</p>
          </div>

        </div>

        <h3 className="premium-brand">LIVARA HOMES</h3>

        <div className="premium-border"></div>

      </div>

      {/* POPUP */}
      {activeImg && (
        <div className="image-modal" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="popup" />
        </div>
      )}

    </div>
  );
}