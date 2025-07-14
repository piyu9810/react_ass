import React, { useState } from "react";

function MovieEntry() {
  const [movie, setMovie] = useState("");

  const handleAdd = () => {
    alert(`Movie "${movie}" added!`);
    setMovie("");
  };

  return (
    <div className="admin-container">
      <h2>Enter Movie</h2>
      <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="Movie Name" />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
}

export default MovieEntry;
