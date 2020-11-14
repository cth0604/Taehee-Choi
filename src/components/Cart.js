import React from "react";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import CartItem from "./CartItem";
import cartStyle from "./Cart.css";

function Cart(props) {
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      {props.cartItems.map((cartItem) => {
        return (
          <CartItem
            item={cartItem}
            key={uniqid()}
            updateCartItems={props.updateCartItems}
            deleteCartItem={props.deleteCartItem}
          />
        );
      })}
    </div>
  );
}

export default Cart;
