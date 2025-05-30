import React from "react";

const Renderlist = () => {
  const fruits = ["Apples", "pinapple", "Mango", "liche", "Blueberry"];
  return (
    // task 1 : rendering list using map (Lists & keys)
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <UserListWithUniqueKey/>
    </>
  );
};

export default Renderlist;

const UserListWithUniqueKey = ()=>{

    // task 2 : user with unique key (Lists & keys)
    const users = ['priya','riya','jiya','Aradhya','krishti','Reeva','Mahi']
    return (
        users.map(user => <li key={crypto.randomUUID()} className={crypto.randomUUID()}>{user}</li>)
    )
}