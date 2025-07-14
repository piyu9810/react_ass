import React, { useState } from "react";

function Navbar({ role, onLogout, onNavigate, onSearch }) {
  const [search, setSearch] = useState("");

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.brand} onClick={() => onNavigate(role === "admin" ? "admin-dashboard" : "home")}>
        🎬 {role === "admin" ? "Admin Panel" : "Movie Booking"}
      </div>
      <div style={styles.links}>
        {role === "admin" ? (
          <>
            <button style={styles.link} onClick={() => onNavigate("admin-dashboard")}>Dashboard</button>
            <button style={styles.link} onClick={() => onNavigate("admin-movie-entry")}>Movie Entry</button>
            <button style={styles.link} onClick={onLogout}>Logout</button>
          </>
        ) : role === "user" ? (
          <>
            <button style={styles.link} onClick={() => onNavigate("home")}>Home</button>
            <button style={styles.link} onClick={onLogout}>Logout</button>
            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={handleSearch}
              style={styles.search}
            />
          </>
        ) : (
          <>
            <button style={styles.link} onClick={() => onNavigate("login")}>Login</button>
            <button style={styles.link} onClick={() => onNavigate("register")}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#232526",
    color: "#fff",
    padding: "1rem 2rem",
    borderBottom: "2px solid #444",
    flexWrap: "wrap"
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  },
  link: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0 0.5rem"
  },
  search: {
    padding: "0.5rem",
    borderRadius: "8px",
    border: "1px solid #888",
    fontSize: "1rem",
    marginLeft: "1rem"
  }
};

export default Navbar;
