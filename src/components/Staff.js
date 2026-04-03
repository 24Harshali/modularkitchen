import React from "react";

export default function Staff() {
  const staff = [
    {
      name: "Aapurva Mahadik",
      role: "Senior Interior Designer",
      img: ""
    },
    {
      name: "Sujal Rajput",
      role: "Junior Interior Designer",
      img: ""
    },
    {
      name: "Kuldip Gawali",
      role: "Site Supervisor",
      img: ""
    }
  ];

  return (
    <section className="staff">
      <h2 className="section-title">Meet Our Experts</h2>
      <p className="section-subtitle">Creative minds behind our work</p>

      <div className="staff-grid">
        {staff.map((member, index) => (
          <div key={index} className="staff-card">
            
            <div className="img-box">
  {member.img ? (
    <img src={member.img} alt={member.name} />
  ) : (
    <div className="placeholder">
      {member.name.charAt(0)}
    </div>
  )}

  <div className="overlay">
    <span>View Profile</span>
  </div>
</div>

            <div className="staff-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}