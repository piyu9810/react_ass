import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Riya", email: "riya123@gmail.com" },
    { id: 2, name: "Viha", email: "viha235@gmail.com" },
    { id: 3, name: "Mahi", email: "mahi564@gmail.com" },
    { id: 4, name: "Jiya", email: "jiya12@gmail.com" },
    { id: 5, name: "Aradhya", email: "aradhya173@gmail.com" }
  ]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default DataFetcher;
