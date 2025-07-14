import React, { useState } from "react";

const seatNumbers = Array.from({ length: 50 }, (_, i) => i + 1);

function SeatSelection({ onBookSeats, goBack }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = seat => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div style={{textAlign: "center"}}>
      <button onClick={goBack} style={{marginBottom: "1rem"}}>← Back</button>
      <h2>Select Seats</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
        justifyContent: "center",
        maxWidth: "260px",
        margin: "1rem auto",
      }}>
        {seatNumbers.map(seat => (
          <button
            key={seat}
            style={{
              width: "44px",
              height: "44px",
              background: selectedSeats.includes(seat) ? "#00b894" : "#636e72",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
      <button
        onClick={() => onBookSeats(selectedSeats)}
        style={{
          padding: "0.7rem 2rem",
          background: "#6c5ce7",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Book
      </button>
    </div>
  );
}

export default SeatSelection;
