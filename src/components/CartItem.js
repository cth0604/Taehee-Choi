import React from "react";
import { useState, useEffect } from "react";
import cartStyle from "./Cart.css";

function CartItem(props) {
  const updateAmount = (e) => {
    if (e.target.value >= 1 && !isNaN(Number(e.target.value))) {
      props.updateCartItems(props.item, Number(e.target.value) - props.item.amount);
    }
  }

  const incrementAmount = () => {
    props.updateCartItems(props.item, 1);
  };

  const decrementAmount = () => {
    if (props.item.amount > 1) {
      props.updateCartItems(props.item, -1);
    }
  };

  const deleteItem = () => {
    props.deleteCartItem(props.item);
  }

  return (
    <div className="cart-item">
      <div className="buttons">
        <span className="delete-btn" onClick={deleteItem}>
          <i className="fas fa-trash-alt"></i>
        </span>
        <span className="like-btn">
          <i className="fas fa-heart"></i>
        </span>
      </div>
      <div className="item-image">
        <img
          src={props.item.images.background}
          alt=""
          height="80px"
          width="80px"
        />
      </div>
      <div className="description">
        <span>{props.item.name}</span>
        <span>{props.item.description}</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={incrementAmount}
        >
          <i className="fas fa-plus"></i>
        </button>
        <input type="text" name="name" value={props.item.amount} onChange={updateAmount} />
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={decrementAmount}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>

      <div className="total-price">${props.item.price * props.item.amount}</div>
    </div>
  );
}

export default CartItem;
