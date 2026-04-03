import React from "react";

export default function Materials() {
  const materials = [
    {
      title: "HDHMR Board",
      desc: "Strong, durable and perfect for shutters and panels.",
      icon: "🪵"
    },
    {
      title: "BWR Plywood",
      desc: "High moisture resistance and excellent durability.",
      icon: "💧"
    },
    {
      title: "Laminate Finish",
      desc: "Stylish surface with wide design options.",
      icon: "🎨"
    },
    {
      title: "Acrylic Panels",
      desc: "High gloss premium look for modern kitchens.",
      icon: "✨"
    }
  ];

  return (
    <section className="materials-section">
      <div className="content">
        <h2 className="section-title">Core Materials We Use</h2>
        <p className="section-subtitle">
          Premium quality materials for long-lasting modular interiors
        </p>

        <div className="material-grid">
          {materials.map((item, i) => (
            <div className="material-card" key={i}>
              
              {/* 🔥 ICON */}
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              {/* 🔥 hover line */}
              <div className="hover-line"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}