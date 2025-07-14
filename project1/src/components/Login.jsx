import React, { useState } from "react";

function Login({ onLogin, goRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    // authentication using localStorage
    const regUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = regUsers.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("user", username);
      onLogin(username);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleLogin} style={authStyles.form}>
      <h2>Login</h2>
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
      <button type="submit" style={authStyles.button}>Login</button>
      <p>
        New user?{" "}
        <span style={{color: "#00b894", cursor: "pointer"}} onClick={goRegister}>
          Register here
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

export default Login;
