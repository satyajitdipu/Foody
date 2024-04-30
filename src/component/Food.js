import React, { useState } from 'react'
import FoodItem from '../food-itmes.json'


function Food() {
  const [addedItems, setAddedItems] = useState([]);

  const foodItems = FoodItem.map(food => food.items);

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
        {foodItems.map(foods => {
          return foods.map(element => {
            const isAdded = addedItems.includes(element);
            return (
              <div className="col" key={element.id}>
                <div className="card h-100">
                  <img src={element.img} className="card-img-top" alt="food item" />
                  <div className="card-body">
                    <h5 className="card-title">{element.itemName}</h5>
                    <p className="card-text">{element.vegan}</p>
                    <p className="card-text">{element.description}</p>
                    <p className="card-text"><small className="text-muted">Rs: {element.price}</small></p>
                    <button 
                      type="button" 
                      onClick={() => handleAdd(element)} 
                      className={`btn btn-${isAdded ? 'success' : 'warning'}`}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added to cart' : 'Add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Food
