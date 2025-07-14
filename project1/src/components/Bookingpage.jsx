import React, { useState } from "react";

function BookingPage({ movie, onSelectShow, goBack }) {
  const [selectedTime, setSelectedTime] = useState("");

  const handleSelect = () => {
    if (selectedTime) onSelectShow(selectedTime);
    else alert("Please select a show time.");
  };

  return (
    <div style={{maxWidth: "350px", margin: "0 auto"}}>
      <button onClick={goBack} style={{marginBottom: "1rem"}}>← Back</button>
      <h2>Book: {movie.title}</h2>
      <label style={{display: "block", margin: "1rem 0 0.5rem"}}>Select Show Time:</label>
      <select
        value={selectedTime}
        onChange={e => setSelectedTime(e.target.value)}
        style={{
          width: "100%",
          padding: "0.7rem",
          borderRadius: "8px",
          border: "1px solid #888",
          marginBottom: "1.5rem",
        }}
      >
        <option value="">--Select--</option>
        {movie.showTimes.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      <button
        onClick={handleSelect}
        style={{
          padding: "0.7rem 2rem",
          background: "#0984e3",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default BookingPage;





