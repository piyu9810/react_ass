import React, { useState } from "react";

function Register({ goLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = e => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.username === username)) {
      alert("Username already exists");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    goLogin();
  };

  return (
    <form onSubmit={handleRegister} style={authStyles.form}>
      <h2>Register</h2>
      <input
        style={authStyles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        style={authStyles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" style={authStyles.button}>Register</button>
      <p>
        Already have an account?{" "}
        <span style={{color: "#00b894", cursor: "pointer"}} onClick={goLogin}>
          Login here
        </span>
      </p>
    </form>
  );
}

const authStyles = {
  form: {
    maxWidth: "350px",
    margin: "2rem auto",
    background: "#232526",
    padding: "2rem",
    borderRadius: "14px",
    boxShadow: "0 4px 16px #0004",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "0.7rem",
    margin: "0.5rem 0",
    borderRadius: "8px",
    border: "1px solid #888",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.7rem",
    background: "#00b894",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    margin: "1rem 0",
    cursor: "pointer",
  },
};

export default Register;
