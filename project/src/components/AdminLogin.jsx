import React, { useState } from "react";

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
