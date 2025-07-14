import React from "react";
import movies from "../data/Movies";

const sliderStyles = {
  display: "flex",
  overflowX: "auto",
  gap: "1.5rem",
  padding: "1rem 0",
  scrollbarWidth: "thin",
};

const movieCard = {
  minWidth: "180px",
  background: "#282c34",
  borderRadius: "12px",
  boxShadow: "0 4px 12px #0003",
  padding: "1rem",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s",
};

function Home({ onMovieClick }) {
  return (
    <div>
      <h2 style={{marginBottom: "1rem"}}>Now Showing</h2>
      <div style={sliderStyles}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={movieCard}
            onClick={() => onMovieClick(movie)}
            tabIndex={0}
            onKeyPress={e => e.key === "Enter" && onMovieClick(movie)}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                width: "100%",
                height: "220px",
                borderRadius: "8px",
                objectFit: "cover",
                marginBottom: "0.5rem",
              }}
            />
            <h3 style={{margin: "0.5rem 0"}}>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

