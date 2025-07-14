import React from "react";

function OrderSummary({ movie, showTime, seats, onFinish, goBack }) {
  const pricePerSeat = 150;
  const total = seats.length * pricePerSeat;

  return (
    <div style={{maxWidth: "400px", margin: "0 auto", textAlign: "center"}}>
      <button onClick={goBack} style={{marginBottom: "1rem"}}>← Back</button>
      <h2>Booking Summary</h2>
      <p><strong>Movie:</strong> {movie.title}</p>
      <p><strong>Show Time:</strong> {showTime}</p>
      <p><strong>Seats:</strong> {seats.join(", ")}</p>
      <p><strong>Total Price:</strong> ₹{total}</p>
      <button
        onClick={onFinish}
        style={{
          padding: "0.7rem 2rem",
          background: "#fdcb6e",
          color: "#222",
          border: "none",
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          marginTop: "1.5rem",
          cursor: "pointer",
        }}
      >
        Finish
      </button>
    </div>
  );
}

export default OrderSummary;
