import React from "react";
import { useState, useEffect } from "react";
import Cart from "./Cart";

function Item(props) {
  const [item, setItem] = useState(props.item);
  const [itemNumber, setItemNumber] = useState(1);

  const updateItemNumber = (e) => {
    setItemNumber(e.target.value < 1 ? 1 : e.target.value);
  };

  const handleOnBuy = (e) => {
    props.updateCartItems(item, itemNumber);
    setItemNumber(1);
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={item.images.background}
        width="100%"
        height="60%"
      />
      <div className="card-body text-center">
        <h4 className="card-title">{item.name}</h4>
        <p>${item.price}</p>
        <input
          className="d-inline w-25"
          type="number"
          value={itemNumber}
          onChange={updateItemNumber}
        ></input>
        <a href="#" className="btn btn-primary" onClick={handleOnBuy}>
          <i className="fas fa-cart-arrow-down"></i>
        </a>
      </div>
    </div>
  );
}

export default Item;
