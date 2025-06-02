import React from "react";

const fruitlist = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default fruitlist;
