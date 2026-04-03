import React, { useState } from "react";

export default function KitchenShowcase() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
  ];

  return (
    <div className="section showcase" id="kitchen">

      <h2>Recent Projects</h2>

      <p className="project-subtext">
        Explore our latest modern kitchen designs crafted with elegance and perfection.
      </p>

      {/* GRID */}
      <div className="project-grid">
        {images.map((img, index) => (
          <div 
            className="project-card"
            key={index}
            onClick={() => setActiveImg(img)}
          >
            <img src={img} alt="kitchen" />
          </div>
        ))}
      </div>

      {/* MODAL POPUP */}
      {activeImg && (
        <div className="image-modal" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="preview" />
        </div>
      )}

    </div>
  );
}