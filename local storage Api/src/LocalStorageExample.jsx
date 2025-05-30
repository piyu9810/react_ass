import React, { useState, useEffect } from "react";

const LocalStorageExample = () => {
  const [name, setName] = useState("");

  // Load stored name when component mounts
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // Update local storage when name changes
  const handleChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  };

  // Clear name from storage
  const clearName = () => {
    localStorage.removeItem("name");
    setName("");
  };

  return (
    <div>
      <h2>Local Storage Example</h2>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Stored Name: {name}</p>
      <button onClick={clearName}>Clear Name</button>
    </div>
  );
};

export default LocalStorageExample;
