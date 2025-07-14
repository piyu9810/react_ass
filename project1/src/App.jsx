import React, { useState } from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import BookingPage from "./components/Bookingpage";
import SeatSelection from "./components/SeatSelection";
import OrderSummary from "./components/Ordersummary";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState("login");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showTime, setShowTime] = useState("");
  const [seats, setSeats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleLogin = (username) => {
    setUser(username);
    setPage("home");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setPage("login");
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setPage("details");
  };

  const handleBook = () => setPage("booking");
  const handleSelectShow = (time) => {
    setShowTime(time);
    setPage("seats");
  };

  const handleBookSeats = (selectedSeats) => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    setSeats(selectedSeats);
    setPage("summary");
  };

  const handleFinish = () => {
    alert("Booking successful!");
    setPage("home");
    setSelectedMovie(null);
    setShowTime("");
    setSeats([]);
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <h1 style={{ margin: 0 }}>🎬 Movie Ticket Booking</h1>
        {user && (
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div style={styles.container}>
        {!user && page === "login" && (
          <Login onLogin={handleLogin} goRegister={() => setPage("register")} />
        )}
        {!user && page === "register" && (
          <Register goLogin={() => setPage("login")} />
        )}
        {user && page === "home" && (
          <Home onMovieClick={handleMovieClick} />
        )}
        {user && page === "details" && (
          <MovieDetails movie={selectedMovie} onBook={handleBook} goBack={() => setPage("home")} />
        )}
        {user && page === "booking" && (
          <BookingPage movie={selectedMovie} onSelectShow={handleSelectShow} goBack={() => setPage("details")} />
        )}
        {user && page === "seats" && (
          <SeatSelection onBookSeats={handleBookSeats} goBack={() => setPage("booking")} />
        )}
        {user && page === "summary" && (
          <OrderSummary
            movie={selectedMovie}
            showTime={showTime}
            seats={seats}
            onFinish={handleFinish}
            goBack={() => setPage("seats")}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #232526, #414345)",
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#232526",
    borderBottom: "2px solid #444",
  },
  logoutBtn: {
    padding: "0.5rem 1.2rem",
    background: "#f44336",
    border: "none",
    color: "#fff",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  container: {
    maxWidth: "900px",
    margin: "2rem auto",
    background: "rgba(34,34,34,0.9)",
    padding: "2rem",
    borderRadius: "18px",
    boxShadow: "0 8px 24px #0004",
  },
};

export default App;