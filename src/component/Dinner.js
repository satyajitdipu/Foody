import React from 'react';
import { useState } from 'react';
const FoodItem = require("../food-itmes.json");

function Dinner() {
  const [addedItems, setAddedItems] = useState([]);

 
  const foodItems = FoodItem.filter(food => food.category === "Dinner");
  const breakFastList = foodItems[0].items;
  console.log(breakFastList)
 
  const handleAdd = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isItemInCart = cartItems.some(cartItem => cartItem.itemName === item.itemName);
    if (!isItemInCart) {
      cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      setAddedItems([...addedItems, item]);
    }
  }

  return (
    <div className="container mt-4">
    <div className="row">
    {breakFastList.map(list => {
      const isAdded = addedItems.includes(list);
      return (
        <div className="col" key={list.id}>
        <div className="card h-100">
          <img src={list.img} className="card-img-top" alt="food item" />
          <div className="card-body">
            <h5 className="card-title">{list.itemName}</h5>
            <p className="card-text">{list.description}</p>
            <p className="card-text"><small className="text-muted">Rs: {list.price}</small></p>
            <button 
              type="button" 
              onClick={() => handleAdd(list)} 
              className={`btn btn-${isAdded ? 'success' : 'warning'}`}
              disabled={isAdded}
            >
              {isAdded ? 'Added to cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
      );
    })}
  </div>
  </div>
);
}

export default Dinner;
