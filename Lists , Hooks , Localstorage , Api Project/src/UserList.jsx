import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Riya" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Sneha" },
    { id: 4, name: "Vikram" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
