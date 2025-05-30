import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Auth = () => {
  const { user, login, logout } = useContext(UserContext);
  const [username, setUsername] = useState("");

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input type="text" placeholder="Enter name" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => login(username)}>Login</button>
        </>
      )}
    </div>
  );
};

export default Auth;
