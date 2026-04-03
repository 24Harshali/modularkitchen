import React, { useState } from "react";

export default function Reviews() {
const [reviews, setReviews] = useState([
  {
    text: "We are extremely satisfied with the interior work executed for our residence.",
    name: "Mr. Lalit Raj",
    role: "Residential Project",
   
  },
  {
    text: "The team handled our office project with professionalism and attention to detail.",
    name: "Mrs. Gauravi",
    role: "Commercial Project",
   
  },
  {
    text: "Quality workmanship with durable materials and timely execution.",
    name: "Mr. Vinayak",
    role: "Hostel Project",
   
  }
]);

  const [newReview, setNewReview] = useState("");

  const handleAdd = () => {
    if (newReview.trim() === "") return;

    setReviews([newReview, ...reviews]);
    setNewReview("");
  };

  return (
    <div className="section review-section">

      <h2 className="section-title">Client Reviews</h2>

      {/* ADD REVIEW */}
      <div className="add-review">
        <textarea
          placeholder="Write your experience..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleAdd}>Submit Review</button>
      </div>

      {/* REVIEW GRID */}
      <div className="review-grid">
  {reviews.map((r, i) => (
    <div key={i} className="review-card">

      <div className="review-top">
        <img src={r.img} alt="" />
        <div>
          <h4>{r.name}</h4>
          <span>{r.role}</span>
        </div>
      </div>

      <p className="review-text">"{r.text}"</p>

      <div className="stars">★★★★★</div>

    </div>
  ))}
</div>

    </div>
  );
}