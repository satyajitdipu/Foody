import React, { useState, useEffect } from 'react';
import '../component/cart.scss'
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
    updateTotal(items);
  }, []);

  const handleQuantityChange = (item, newQuantity) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartItems(newCartItems);
    updateTotal(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handleRemoveItem = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
    updateTotal(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handlePlaceOrder = () => {
    const orderItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;
    
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      const quantity = item.quantity || 1; 
      total += item.price * quantity;
      orderItems[i] = {
        ...item,
        quantity: quantity
      };
    }
  
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    localStorage.setItem('total', JSON.stringify(total));
    localStorage.setItem('cartItems', JSON.stringify([]));
    setCartItems([]);
    setTotal(0);
    window.location.href = '/Cart/OrderId'
  };

  const updateTotal = (items) => {
    let newTotal = 0;
    items.forEach(item => {
      newTotal += item.price * (item.quantity || 1);
    });
    setTotal(newTotal);
    localStorage.setItem("total", newTotal)
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li className='itemsli' key={item.id}>
            
            {item.itemName}<span className='text'></span>  <div className='allbut'>
            <span className='quant'>Quantity:</span><button class="btn btn-primary" onClick={() => handleQuantityChange(item, (item.quantity || 1) - 1)}>-</button>
            <input type="number" class="success" value={item.quantity || 1} min={1} onChange={(event) => handleQuantityChange(item, event.target.value)} />
            <button class="btn btn-primary" onClick={() => handleQuantityChange(item, (item.quantity || 1) + 1)}>+</button>
            <span className='pricein'>Price:</span><span>{item.price* item.quantity }</span>
            <button class="btn btn-danger" onClick={() => handleRemoveItem(item)}>Remove</button>
            </div> </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div>
          <p className='price'>Total Price: {total}</p>
          <button class="btn btn-success" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
      {cartItems.length === 0 && <p className='noitem'>No items in cart.</p>}
    </div>
  );
}

export default Cart;
