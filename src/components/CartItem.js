import React from "react";
import "./CartItem.css";

export default function CartItem({ item }) {
  return (
    <div className="item">
      <p>
        {item.name} ${item.price}
      </p>
    </div>
  );
}
