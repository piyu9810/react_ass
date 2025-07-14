function Logout({ onLogout }) {
  return (
    <div className="admin-container">
      <button onClick={() => onLogout(false)}>Logout</button>
    </div>
  );
}

export default Logout;
