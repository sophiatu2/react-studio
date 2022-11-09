// TODO: create a component that displays a single bakery item
import React from "react";
import "./BakeryItem.css";

export default function BakeryItem(props) {
  const item = props.item;

  return (
    <div className="item">
      <img src={item.image}></img>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      <p>{item.price}</p>
      <button onClick={item.onClick}>Add to Cart</button>
    </div>
  );
}
