import React, { useState } from "react";
import MovieEntry from "./MovieEntry";

function AdminDashboard({ onLogout }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      <MovieEntry />
    </div>
  );
}

export default AdminDashboard;
