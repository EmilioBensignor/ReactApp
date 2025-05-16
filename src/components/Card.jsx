import React from "react";

function Card({name, price}) {


  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{price + 500}</p>
    </div>
  );
}

export default Card;
