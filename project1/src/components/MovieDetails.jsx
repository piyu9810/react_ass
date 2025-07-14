
import React from "react";

function MovieDetails({ movie, onBook, goBack }) {
  if (!movie) return null;
  return (
    <div style={{textAlign: "center"}}>
      <button onClick={goBack} style={{marginBottom: "1rem"}}>← Back</button>
      <h2>{movie.title}</h2>
      <img
        src={movie.poster}
        alt={movie.title}
        style={{width: "220px", borderRadius: "10px"}}
      />
      <p style={{margin: "1rem 0"}}>{movie.description}</p>
      <button
        onClick={onBook}
        style={{
          padding: "0.7rem 2rem",
          background: "#00b894",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default MovieDetails;
