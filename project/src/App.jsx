import React, { useState } from "react";
import AdminLogin from "./components/AdminLogin";
import MovieEntry from "./components/MovieEntry";
import Logout from "./components/Logout";
import SearchBar from "./components/Search Bar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {!isLoggedIn ? (
        <AdminLogin onLogin={setIsLoggedIn} />
      ) : (
        <>
          <SearchBar onSearch={setSearchTerm} />
          <MovieEntry />
          <Logout onLogout={setIsLoggedIn} />
        </>
      )}
    </div>
  );
}

export default App;
