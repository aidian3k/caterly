import React, { useState } from "react";
import "./ReviewForm.css";
import OrderService from "../../services/OrderService";

interface ReviewFormProps {
  orderId: number;
}

export default function ReviewForm(props: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await OrderService.addReview(props.orderId, rating, reviewText);
      setSuccess("Opinia została dodana pomyślnie!");
      setRating(0);
      setReviewText("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    setRating(0);
    setReviewText("");
    setError(null);
    setSuccess(null);
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

        {error && <p className="review-error">{error}</p>}
        {success && <p className="review-success">{success}</p>}

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
