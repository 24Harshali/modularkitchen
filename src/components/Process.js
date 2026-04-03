export default function Process() {
  const steps = [
    "Material Selection",
    "Final Measurement",
    "Client Approval",
    "Production & Quality Check",
    "Packaging & Dispatch",
    "Installation & Handover"
  ];

  return (
    <div className="process-circle-section">

      {/* HEADING */}
      <h2 className="process-heading">Our Process</h2>

      <div className="process-wrapper">

        {/* LEFT SIDE (CIRCLE) */}
        <div className="circle-container">
          <div className="center-text">Process</div>

          {steps.map((step, i) => (
            <div
              className="step"
              key={i}
              style={{ "--angle": `${i * 60}deg` }}
            >
              {i + 1}
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="process-content">
          <h3>How We Work</h3>
          <p>
            We follow a structured process ensuring quality and precision at every stage,
            from material selection to final installation.
          </p>
        </div>

      </div>
    </div>
  );
}