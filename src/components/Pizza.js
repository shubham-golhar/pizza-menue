import React from "react";

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <div>
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{price}</p>
      <p>{soldOut}</p>
    </div>
  );
};

export default Pizza;
