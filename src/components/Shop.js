import React from "react";
import { useState, useEffect } from "react";
// @ts-ignore
import FortniteAPI from "fortnite-api-io";
import Item from "./Item";
import shopStyle from "./Shop.css";
import uniqid from "uniqid";

function Shop(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const fortniteAPI = new FortniteAPI("5172bb54-38e2a693-3c40c9c2-b32dcc6b");
    const items = await fortniteAPI.listUpcomingItems();
    setItems(items.items.map((item, i) => {
      item.price = i + 1;
      return item;
    }));
  };

  return (
    <div>
      <div className="container">
        {items.map((item) => {
          return (
            <Item
              item={item}
              updateCartItems={props.updateCartItems}
              key={uniqid()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
