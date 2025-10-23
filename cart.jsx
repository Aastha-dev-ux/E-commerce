import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem('shopping_cart');
    if (itemsFromStorage) {
      setCartItems(JSON.parse(itemsFromStorage));
    }
  }, []);

  const handleRemoveItem = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    
    setCartItems(updatedCart);
    
    localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <span className="item-title">{item.title}</span>
              
              <div className="cart-item-details">
                <span className="item-price">${item.price.toFixed(2)}</span>
                
                <button 
                  onClick={() => handleRemoveItem(index)} 
                  className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;