import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const deleteCartItem = (item) => {
    setCartItems(
      cartItems.filter((cartItem) => {
        return cartItem.id !== item.id;
      })
    );
  };

  const updateCartItems = (item, amount) => {
    if (checkIfItemExists(item.id)) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            item.amount = cartItem.amount + Number(amount);
            return item;
          } else {
            return cartItem;
          }
        })
      );
    } else {
      item.amount = Number(amount);
      setCartItems(cartItems.concat(item));
    }
  };

  const checkIfItemExists = (id) => {
    return cartItems.some((cartItem) => cartItem.id === id);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={(props) => (
              <Shop {...props} updateCartItems={updateCartItems} />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                cartItems={cartItems}
                updateCartItems={updateCartItems}
                deleteCartItem={deleteCartItem}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
