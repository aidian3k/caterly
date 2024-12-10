import React, { useState } from "react";
import "./ReviewForm.css";

export default function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dodano opinię:", { rating, reviewText });
    setRating(0);
    setReviewText("");
  };

  const handleCancel = () => {
    setRating(0);
    setReviewText("");
  };

  return (
    <div className="review-form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        <h2 className="review-form-title">Dodaj opinię</h2>

        <label className="review-form-label">Ilość gwiazdek</label>
        <div className="review-stars">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
            <span
              key={star}
              className={`star ${
                (hoverRating || rating) >= star ? "filled" : ""
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
            >
              ★
            </span>
          ))}
        </div>

        <label className="review-form-label">Treść opinii</label>
        <textarea
          className="review-textarea"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Wpisz swoją opinię"
          required
        ></textarea>

        <button type="submit" className="review-submit-button">
          + Dodaj opinię
        </button>
        <button
          type="button"
          className="review-cancel-button"
          onClick={handleCancel}
        >
          Anuluj
        </button>
      </form>
    </div>
  );
}
