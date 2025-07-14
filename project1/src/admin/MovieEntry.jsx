import React, { useState } from "react";

function MovieEntry() {
  const [title, setTitle] = useState("");
  const [showTime, setShowTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save movie logic  (API call)
    alert(`Movie "${title}" added for show time: ${showTime}`);
    setTitle("");
    setShowTime("");
  };

  return (
    <div>
      <h2>Add Movie Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Show Time"
          value={showTime}
          onChange={e => setShowTime(e.target.value)}
        /><br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieEntry;




