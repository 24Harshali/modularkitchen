import React, { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    "We are extremely satisfied with the work!",
    "Professional team and great quality.",
  ]);

  const [newReview, setNewReview] = useState("");

  const addReview = () => {
    if (newReview.trim() === "") return;

    setReviews([newReview, ...reviews]);
    setNewReview("");
  };

  return (
    <div className="section">

      <h2>Client Reviews</h2>

      {/* ADD REVIEW */}
      <div className="add-review">
        <textarea
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />

        <button onClick={addReview}>Submit</button>
      </div>

      {/* SAME GRID STYLE LIKE SERVICES */}
      <div className="grid">
        {reviews.map((r, i) => (
          <div key={i} className="card">
            {r}
          </div>
        ))}
      </div>

    </div>
  );
}